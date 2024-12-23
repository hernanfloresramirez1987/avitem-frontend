import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { DarkmodeComponent } from './darkmode/darkmode.component';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, DarkmodeComponent, AvatarModule, DividerModule, PanelMenuModule,
    MenubarModule, FormsModule,
    InputTextModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  onShowSidebar = ($e: any) => console.log($e);

  onHiddenSidebar = ($e: any) => {console.log(`hiden: ${$e}`); console.log($e)};

  sidebarChange = ($e: any) => console.log($e); //this.sidebarVisible.set($e);


  /////MenuBar
  items = signal<MenuItem[]>([]);
  
  constructor(private router: Router) {
    this.initializeMenu();
    this.items.set([
      // {
      //   label: "<b>Avitem Importaciones</b>",
      //   scape: false,
      // },
      {
        icon: 'pi pi-fw pi-align-justify',
        command: () => this.sidebarVisible.set(true),
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



  








  menuItems = signal<MenuItem[]>([]);

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





  initializeMenu() {
    this.menuItems.set([
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: ['/dashboard'],
        command: () => this.sidebarVisible.set(false)
      },
      {
        label: 'Administración',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Usuarios',
            icon: 'pi pi-users',
            items: [
              {
                label: 'Lista de Usuarios',
                icon: 'pi pi-list',
                routerLink: ['/empleados/'],
                command: () => this.sidebarVisible.set(false)
              },
              {
                label: 'Crear Usuario',
                icon: 'pi pi-user-plus',
                routerLink: ['/empleados/register'],
                command: () => this.sidebarVisible.set(false)
              }
            ]
          },
          {
            label: 'Roles',
            icon: 'pi pi-id-card',
            routerLink: ['/roles'],
            command: () => this.sidebarVisible.set(false)
          }
        ]
      },
      {
        label: 'Reportes',
        icon: 'pi pi-chart-bar',
        items: [
          {
            label: 'Ventas',
            icon: 'pi pi-dollar',
            routerLink: ['/reports/sales'],
            command: () => this.sidebarVisible.set(false)
          },
          {
            label: 'Inventario',
            icon: 'pi pi-box',
            routerLink: ['/reports/inventory'],
            command: () => this.sidebarVisible.set(false)
          }
        ]
      },
      {
        label: 'Configuración',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Perfil',
            icon: 'pi pi-user',
            routerLink: ['/settings/profile'],
            command: () => this.sidebarVisible.set(false)
          },
          {
            label: 'Preferencias',
            icon: 'pi pi-sliders-h',
            routerLink: ['/settings/preferences'],
            command: () => this.sidebarVisible.set(false)
          }
        ]
      }
    ]);
  }

  sidebarVisible = signal<boolean>(false);

  toggleSidebar() {
    this.sidebarVisible.update(v => !v);
  }

  onNavigate(route: string) {
    this.router.navigate([route]);
    this.sidebarVisible.set(false);
  }
}
