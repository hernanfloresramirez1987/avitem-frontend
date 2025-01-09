import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', data: { breadcrumb: 'list' }, loadComponent: () => import('./purchases.component') },
  { path: 'create', data: { breadcrumb: 'create' }, loadComponent: () => import('./purchase-create/purchase-create.component') },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
