import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

export const routes: Routes = [
    {
      path: '', component: AppLayoutComponent,
      children: [
        // { path: 'location', data: { breadcrumb: 'Parameterization / Location' }, loadChildren: () => import('./core/components/pages/location/location.module').then(m => m.LocationModule) },
        // { path: 'webreport', data: { breadcrumb: '' }, loadComponent: () => import('./core/components/pages/report/report.component'), }
      ]
    }
  ];