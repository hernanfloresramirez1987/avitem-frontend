import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', data: { breadcrumb: 'Home' }, loadComponent: () => import('./users.component') },
  { path: 'create', data: { breadcrumb: 'Home' }, loadComponent: () => import('./users-create/users-create.component') },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }