import { ProductUpdateComponent } from './shared/components/product-crud/product-update/product-update.component';
import { ProductDeleteComponent } from './shared/components/product-crud/product-delete/product-delete.component';
import { ProductCreateComponent } from './shared/components/product-crud/product-create/product-create.component';
import { ProductCrudComponent } from './shared/components/product-crud/product-crud.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
