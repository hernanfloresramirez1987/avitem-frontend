import { Routes } from '@angular/router';
import { AppLayout } from '@/layout/components/app.layout';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: 'home', data: { breadcrumb: 'Home' }, loadComponent: () => import('./app/core/components/pages/home/home.component') },
            { path: 'dashboard', data: { breadcrumb: 'Dashboard' }, loadComponent: () => import('./app/core/components/pages/dashboard/dashboard.component'), },
            { path: 'users', data: { breadcrumb: 'Users' }, loadChildren: () => import('./app/core/components/pages/users/users-routing.module').then(m => m.UsersRoutingModule) },
            { path: 'inventory', data: { breadcrumb: 'Inventory' }, loadChildren: () => import('./app/core/components/pages/inventory/inventory-routing.module').then(m => m.InventoryRoutingModule) },
            { path: 'transactions', data: { breadcrumb: 'Transcciones' }, loadChildren: () => import('./app/core/components/pages/transactions/purchases-routing.module').then( m => m.PurchasesRoutingModule) }
        ]
    },
    // { path: 'auth', loadChildren: () => import('@/pages/auth/auth.routes') },
    // { path: 'landing', loadComponent:() => import('@/pages/landing/landing').then(c => c.Landing) },
    // { path: 'notfound', loadComponent:() => import('@/pages/notfound/notfound').then(c => c.Notfound) },
    { path: '**', redirectTo: '/notfound' }
];
