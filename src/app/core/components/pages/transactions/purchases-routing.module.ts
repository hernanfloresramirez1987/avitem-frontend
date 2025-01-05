import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'compras', data: { breadcrumb: 'Compras' }, loadComponent: () => import('./compras/purchases.component') },
  { path: 'ventas', data: { breadcrumb: 'Compras' }, loadComponent: () => import('./compras/purchases.component') },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
