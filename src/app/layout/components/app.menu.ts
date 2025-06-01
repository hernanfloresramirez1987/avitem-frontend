import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: '[app-menu]',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<div class="layout-menu-container" #menuContainer>
        <ul class="layout-menu">
            <ng-container *ngFor="let item of model; let i = index">
                <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
                <li *ngIf="item.separator" class="menu-separator"></li>
            </ng-container>
        </ul>
    </div>`
})
export class AppMenu {
    el: ElementRef = inject(ElementRef);

    @ViewChild('menuContainer') menuContainer!: ElementRef;

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
                        { label: "history", icon: "pi pi-history", routerLink: ["/inventory/warehouse"] },
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
