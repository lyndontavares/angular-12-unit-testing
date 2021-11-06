import { ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductData } from 'src/app/shared/models/product-data.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: ProductData;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct() {
    this.productService.update(this.product).subscribe(() => {
      const id = this.product.id;
      this.productService.showMessage(`The product with id ${id} has been updated successfully!`);
      this.router.navigate(['products']);
    });
  }

  cancel(): void {
    this.router.navigate(['products']);
  }

}
