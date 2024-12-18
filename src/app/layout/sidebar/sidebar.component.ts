import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { DarkmodeComponent } from './darkmode/darkmode.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, DarkmodeComponent, 
    MenubarModule, FormsModule,
    InputTextModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  visibleSidebar = signal<boolean>(false);

  onShowSidebar = ($e: any) => console.log($e);

  onHiddenSidebar = ($e: any) => console.log(`hiden: ${$e}`);

  sidebarChange = ($e: any) => this.visibleSidebar.set($e);


  /////MenuBar
  items = signal<MenuItem[]>([]);
  
  constructor() {
    this.items.set([
      // {
      //   label: "<b>Avitem Importaciones</b>",
      //   scape: false,
      // },
      {
        icon: 'pi pi-fw pi-align-justify',
        command: () => this.visibleSidebar.set(true),
      },
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Project',
                lanbel: 'Other'
              }
            ]
          },
          { label: 'Open' },
          { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ]);
  }



  




























  menuItems = signal<any[]>([
    { 
      label: 'Inicio', 
      icon: 'pi pi-home', 
      route: '/home',
      subItems: [] 
    },
    { 
      label: 'Usuarios', 
      icon: 'pi pi-users', 
      route: '/users',
      subItems: [
        { label: 'Lista de Usuarios', route: '/users/list' },
        { label: 'Agregar Usuario', route: '/users/add' }
      ]
    },
    { 
      label: 'Configuración', 
      icon: 'pi pi-cog', 
      route: '/settings',
      subItems: [
        { label: 'Perfil', route: '/settings/profile' },
        { label: 'Preferencias', route: '/settings/preferences' }
      ]
    },
    { 
      label: 'Reportes', 
      icon: 'pi pi-chart-bar', 
      route: '/reports',
      subItems: [
        { label: 'Ventas', route: '/reports/sales' },
        { label: 'Inventario', route: '/reports/inventory' }
      ]
    }
  ]);

  // Método para manejar la navegación
  navigateTo(route: string) {
    // Implementa la lógica de navegación aquí
    console.log('Navegando a:', route);
  }
  // toggleSubmenu(item: any) {
  //   item.expanded = !item.expanded;
  // }
  toggleSubm(item: any): void {
    // Implement the logic to toggle the submenu for the given item
    item.expanded = !item.expanded; // Example logic to toggle the expanded state
  }
}
