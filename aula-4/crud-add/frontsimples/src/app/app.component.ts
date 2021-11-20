import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductService } from './product.service';
import { ProductData } from './product-data.model';
import { Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  products: MatTableDataSource<ProductData>;
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'total', 'action' ];
  products$: Subscription;
  totalProduts = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService: ProductService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnDestroy(): void {
    if (this.products$) {
      this.products$.unsubscribe();
    }
  }

  fetchData() {
    this.products$ = this.productService.read().subscribe((products) => {
      this.products = new MatTableDataSource<ProductData>(products);
      this.products.paginator = this.paginator;
      this.products.sort = this.sort;
      this.productService.showMessage("Produtos carregados!");
      this.totalProduts = this.calculaTotal(products)
    });
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '450px', height: '380px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result.event == 'Adicionar') {
          this.addRowData(result.data);
        } else if (result.event == 'Editar') {
          this.updateRowData(result.data);
        } else if (result.event == 'Excluir') {
          this.deleteRowData(result.data);
        }
      });
  }

  addRowData(row_obj) {
    var d = new Date();
    const product = {
      id: uuidv4(),
      name: row_obj.name,
      price: row_obj.price,
      quantity: row_obj.quantity
    }
    this.productService.create(product).subscribe(() => {
      this.productService.showMessage("Produto adicionado com sucesso!");
      this.fetchData();
    });
  }

  updateRowData(row_obj) {
    const product = {
      id: row_obj.id,
      name: row_obj.name,
      price: row_obj.price,
      quantity: row_obj.quantity
    }
    this.productService.update(product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.fetchData();
    })
  }

  deleteRowData(product) {
    const id = `${product.id}`;
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage(`Produto com id ${id} excluido com sucesso!`);
      this.fetchData();
    });
  }

  calculaTotal(products: ProductData[] ): number {
    return products.reduce((total, valor) => total + ( valor.price * valor.quantity), 0);
  }

}
