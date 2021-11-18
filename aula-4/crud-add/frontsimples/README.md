# Frontsimples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Instalação

### passo 1

```bash

npm install -g @angular/cli

ng new front

ng add @angular/material

# ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink
# ? Set up global Angular Material typography styles? Yes
# ? Set up browser animations for Angular Material? Yes

```

### passo 2

Adicione em AppModule:

```javascript
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      MatTableModule,
      MatPaginatorModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSortModule,
      MatSnackBarModule,
      HttpClientModule,
      MatCardModule,
    ]
```

### passo 3

Deixe a template app.component.thml conforme abaixo:

```html
<!-- app.component.html -->
<p>
  <mat-toolbar color="primary">
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
      <mat-icon>menu</mat-icon>
    </button>
    <span>Angular Testing</span>
    <span class="example-spacer"></span>
    <button mat-icon-button (click)="fetchData()">
      <mat-icon>refresh</mat-icon>
  </button>
  </mat-toolbar>
</p>

<div class="container text-center">

  <div class="btn-actions">
    <button mat-button (click)="openDialog('Adicionar',{})" mat-flat-button color="primary">Adicionar Produto</button>
  </div>

  <table mat-table [dataSource]="products" #mytable class="my-table mat-elevation-z8">

    <!-- Id Column -->
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef> ID. </th>
      <td mat-cell *matCellDef="let element"> {{element.id}} </td>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Nome </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="quantity">
      <th mat-header-cell *matHeaderCellDef> Quantidade </th>
      <td mat-cell *matCellDef="let element"> {{element.quantity}} </td>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="price">
      <th mat-header-cell *matHeaderCellDef> Preço Unitátio </th>
      <td mat-cell *matCellDef="let element"> {{element.price | currency:'BRL' }} </td>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="total">
      <th mat-header-cell *matHeaderCellDef> Preço Total </th>
      <td mat-cell *matCellDef="let element"> {{element.price * element.quantity | currency:'BRL' }} </td>
    </ng-container>

    <!-- Action Column -->
    <ng-container matColumnDef="action">
      <th mat-header-cell *matHeaderCellDef> Action </th>
      <td mat-cell *matCellDef="let element" class="action-link">
        <a (click)="openDialog('Editar',element)">Edit</a> |
        <a (click)="openDialog('Excluir',element)">Delete</a>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

    <mat-paginator [pageSizeOptions]="[10, 20]" showFirstLastButtons></mat-paginator>

</div>

```

```css

/* app.component.scss */

table {
  width: 100%;
}

.example-spacer {
  flex: 1 1 auto;
}

.btn-actions {
  display: flex;
  justify-content: flex-start;
  padding: 5px;
}


.example-container {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}

.mat-table {
  overflow: auto;
  max-height: 500px;
}


```

### passo 4

app.component.ts

```javascript
//app.component.ts
import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductService } from './product.service';
import { ProductData } from './models/product-data.model';
import { Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export interface UsersData {
  name: string
  id: number
  price?:number
  quantity?:number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  products: MatTableDataSource<ProductData>;
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'total', 'action' ];
  products$: Subscription;

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
    });
    this.fetchData();
  }

}

```

### passo 5

```shell
ng generate component dialog-box
```

```javascript
//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  name: string;
  id: number;
}


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}

```

```html
<!-- dialog-box.component.html -->
<h1 mat-dialog-title><strong>{{action}}</strong></h1>
<div mat-dialog-content>

  <mat-form-field class="fw" *ngIf="action != 'Delete'; else elseTemplate" >
    <input placeholder="UUID" matInput [(ngModel)]="local_data.id" readonly  disabled>
  </mat-form-field>


  <mat-form-field class="fw" *ngIf="action != 'Delete'; else elseTemplate" >
    <input placeholder="Nome" matInput [(ngModel)]="local_data.name">
  </mat-form-field>

    <mat-form-field  class="fw" *ngIf="action != 'Delete'; else elseTemplate">
    <input placeholder="Preço" matInput [(ngModel)]="local_data.price">
  </mat-form-field>

    <mat-form-field  class="fw" *ngIf="action != 'Delete'; else elseTemplate">
    <input placeholder="Quantidade" matInput [(ngModel)]="local_data.quantity">
  </mat-form-field>

  <ng-template #elseTemplate>
    Sure to delete <b>{{local_data.name}}</b>?
  </ng-template>
</div>

<div mat-dialog-actions  align="end">
  <button mat-button (click)="doAction()">{{action}}</button>
  <button mat-button (click)="closeDialog()" mat-flat-button color="warn">Cancel</button>
</div>

```

```html
<!-- dialog-box.component.scss -->
.fw {
  width: 100%;
}

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
