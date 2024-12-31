import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', data: { breadcrumb: 'Productos' }, loadComponent: () => import('./products/products.component') },
  { path: 'products/create', data: { breadcrumb: 'Productos / Registrar' }, loadComponent: () => import('./products/product-create/product-create.component') },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
