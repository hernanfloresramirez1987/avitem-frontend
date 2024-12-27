import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

export const routes: Routes = [
    {
      path: '', component: AppLayoutComponent,
      children: [
        { path: 'home', data: { breadcrumb: 'Home' }, loadComponent: () => import('./core/components/pages/home/home.component') },
        { path: 'dashboard', data: { breadcrumb: 'Dashboard' }, loadComponent: () => import('./core/components/pages/dashboard/dashboard.component'), },
        { path: 'users', data: { breadcrumb: 'Empleados' }, loadChildren: () => import('./core/components/pages/users/users-routing.module').then(m => m.UsersRoutingModule) },
      ]
    }
  ];