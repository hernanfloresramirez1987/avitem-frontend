import { AfterContentInit, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
// import { TranslateLanService } from '../core/_services/translate-lan.service';
// import { MenuSidebarService } from '../core/_services/menu-sidebar.service';
import { timer } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    standalone: false
})
export class AppMenuComponent {
  model: MenuItem[] = [];

  constructor(public layoutService: LayoutService) {
    this.model = [
        {
            label: 'Dashboard', icon: 'pi pi-home',
            items: [
                { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/'] },
                { label: 'Panel principal', icon: 'pi pi-chart-bar', routerLink: ['/dashboard'] }
            ]
        },
        {
            label: 'Administración', icon: 'pi pi-cog',
            items: [
                {
                    label: 'Personal', icon: 'pi pi-users',
                    items: [
                        { label: 'Planilla', routerLink: '/employes', icon: 'pi pi-file' },
                        { label: 'Registrar', routerLink: '/employes/register', icon: 'pi pi-user-plus' }
                    ]
                },
                {
                    label: 'Proveedores', icon: 'pi pi-truck',
                    items: [
                        { label: 'Lista', routerLink: '/suppliers', icon: 'pi pi-list' }
                    ]
                },
                {
                    label: 'Clientes', icon: 'pi pi-user',
                    items: [
                        { label: 'Lista', routerLink: '/clients', icon: 'pi pi-list' }
                    ]
                }
            ]
        },
        {
            label: 'Empleados', icon: 'pi pi-id-card',
            items: [
                { label: 'Gestión de empleados', icon: 'pi pi-briefcase' }
            ]
        },
        {
            label: 'Proveedores', icon: 'pi pi-truck',
            items: [
                { label: 'Gestión de proveedores', icon: 'pi pi-briefcase' }
            ]
        },
        {
            label: 'Clientes', icon: 'pi pi-user',
            items: [
                { label: 'Gestión de clientes', icon: 'pi pi-briefcase' }
            ]
        },
        {
            label: 'Compras', icon: 'pi pi-shopping-cart',
            items: [
                { label: 'Gestión de compras', icon: 'pi pi-wallet' }
            ]
        },
        {
            label: 'Ventas', icon: 'pi pi-shopping-bag',
            items: [
                { label: 'Gestión de ventas', icon: 'pi pi-dollar' }
            ]
        }
    ];
  }

    _translate  = inject(TranslateService)
    // _translateLanService  = inject(TranslateLanService)
    // layoutService = inject(LayoutService)
    // menuJson = inject(MenuSidebarService)
    // model = signal<MenuItem[]>([])

}
