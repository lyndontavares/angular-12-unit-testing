import { SectionService } from './../../services/section.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private sectionService: SectionService) {
  }

  ngOnInit(): void {
    this.sectionService.sectionData = {
      icon: 'storefront',
      title: 'Produtos',
      routerUrl: '/products'
    }
  }

  navigateToProductCreate() {
    this.router.navigate(['products/create'])
  }

}
