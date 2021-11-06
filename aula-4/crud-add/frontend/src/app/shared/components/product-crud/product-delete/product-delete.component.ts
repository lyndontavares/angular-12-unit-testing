import { ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/shared/models/product-data.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: ProductData;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    const id = `${this.product.id}`;
    this.productService.delete(id).subscribe(() => {
      const id = this.product.id;
      this.productService.showMessage(`Produto com id ${id} excluido com sucesso!`);
      this.router.navigate(['products']);
    });
  }

  cancel(): void {
    this.router.navigate(['products']);
  }

}
