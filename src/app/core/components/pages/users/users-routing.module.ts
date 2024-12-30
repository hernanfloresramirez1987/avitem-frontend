import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'employees', data: { breadcrumb: '' }, loadComponent: () => import('./users.component') },
  { path: 'employee/create', data: { breadcrumb: 'Registrar' }, loadComponent: () => import('./users-create/users-create.component') },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
