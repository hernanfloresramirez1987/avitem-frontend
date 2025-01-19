import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', data: { breadcrumb: 'list' }, loadComponent: () => import('./sales.component') },
  { path: 'create', data: { breadcrumb: 'create' }, loadComponent: () => import('./sale-create/sale-create.component') },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
