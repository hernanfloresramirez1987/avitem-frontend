import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'empleados', data: { breadcrumb: 'Empleados' }, loadComponent: () => import('./empleados/users.component') },
  { path: 'empleados/create', data: { breadcrumb: 'Empleados / Registrar' }, loadComponent: () => import('./empleados/users-create/users-create.component') },

  { path: 'proveedores', data: { breadcrumb: 'Proveedores' }, loadComponent: () => import('./proveedores/suppliers.component') },
  { path: 'proveedores/create', data: { breadcrumb: 'Proveedores / Registrar' }, loadComponent: () => import('./proveedores/supplier-create/supplier-create.component') },

  { path: 'clientes', data: { breadcrumb: 'Clientes' }, loadComponent: () => import('./clientes/clientes.component') },
  { path: 'clientes/create', data: { breadcrumb: 'Clientes / Registrar' }, loadComponent: () => import('./clientes/clientes-create/clientes-create.component') },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
