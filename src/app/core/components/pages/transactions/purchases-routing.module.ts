import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'compras', data: { breadcrumb: 'Compras' }, loadChildren: () => import('./compras/compras-routing.module').then(m => m.ComprasRoutingModule) },
  { path: 'ventas', data: { breadcrumb: 'Compras' }, loadChildren: () => import('./ventas/ventas-routing.module').then(m => m.VentasRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
