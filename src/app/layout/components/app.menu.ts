import { Component, ElementRef, inject, viewChild, ViewChild } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: '[app-menu]',
    standalone: true,
    imports: [AppMenuitem, RouterModule],
    template: `<div class="layout-menu-container" #menuContainer>
          <ul class="layout-menu">
            @for (item of model; track item; let i = $index) {
              @if (!item.separator) {
                <li app-menuitem [item]="item" [index]="i" [root]="true"></li>
              }
              @if (item.separator) {
                <li class="menu-separator"></li>
              }
            }
          </ul>
        </div>`
})
export class AppMenu {
    el: ElementRef = inject(ElementRef);

    menuContainer = viewChild<ElementRef>('menuContainer')

    model: MenuItem[] = [
        {
            label: "home", icon: "pi pi-home",
            items: [
                { label: "dashboard", icon: "pi pi-home", routerLink: ["/home"] },
                { label: "main_panel", icon: "pi pi-desktop", routerLink: ["/dashboard"] }
            ]
        },
        {
            label: "users", icon: "pi pi-address-book",
            items: [
                {
                    label: "employees", icon: "pi pi-users",
                    items: [
                        { label: "list", icon: "pi pi-list", routerLink: ["/users/empleados"] },
                        { label: "register_employees", icon: "pi pi-user-plus", routerLink: ["/users/empleados/create"] },
                    ]
                },
                {
                    label: "suppliers", icon: "pi pi-users",
                    items: [
                        { label: "list", icon: "pi pi-list", routerLink: ["/users/proveedores"] },
                        { label: "register_employees", icon: "pi pi-user-plus", routerLink: ["/users/proveedores/create"] },
                    ]
                },
                {
                    label: "customers", icon: "pi pi-users",
                    items: [
                        { label: "list", icon: "pi pi-list", routerLink: ["/users/clientes"] },
                        { label: "register_customers", icon: "pi pi-user-plus", routerLink: ["/users/clientes/create"] },
                    ]
                },
            ]
        },
        {
            label: "inventory", icon: "pi pi-warehouse",
            items: [
                { label: "warehouse", icon: "pi pi-database",
                    items: [
                        { label: "history", icon: "pi pi-history", routerLink: ["/inventory/inventory"] },
                        { label: "branches", icon: "pi pi-building", routerLink: ["/inventory/sucursal"] },
                    ]
                 },
                {
                    label: "catalogs", icon: "pi pi-box",
                    items: [
                        { label: "products", icon: "pi pi-shop", routerLink: ["/inventory/products"] },
                        { label: "create_product", icon: "pi pi-plus-circle", routerLink: ["/inventory/products/create"] },
                    ]
                }
            ]
        },
        {
            label: "purchases", icon: "pi pi-shopping-cart",
            items: [
                { label: "list", icon: "pi pi-list", routerLink: ["/transactions/compras"] },
                { label: "crear", icon: "pi pi-cart-plus", routerLink: ["/transactions/compras/create"] },
            ]
        },
        {
            label: "sales", icon: "pi pi-tag",
            items: [
                { label: "list", icon: "pi pi-list", routerLink: ["/transactions/ventas/"] },
                { label: "crear", icon: "pi pi-plus", routerLink: ["/transactions/ventas/create"] },
            ]
        }
    ]
}
