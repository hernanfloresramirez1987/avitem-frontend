import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { AvatarModule } from 'primeng/avatar';
import { Toolbar, ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ButtonModule, SidebarComponent, HeaderComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  // constructor(private primeng: PrimeNG) {}

  ngOnInit() {
      this.primeng.ripple.set(true);
  }
  title = 'avitem-frontend';

//   toggleDarkMode() {
//     const element = document.querySelector('html');
//     element.classList.toggle('my-app-dark');
// }



languages: any[];
  selectedLanguage: any;
  isDarkMode: boolean = false;
  items: MenuItem[];

  sidebarVisible: boolean = true;
  
  constructor(private primeng: PrimeNG, private router: Router) {
    this.languages = [
      { name: 'English', code: 'en' },
      { name: 'Español', code: 'es' }
    ];
    
    this.items = [
      {
        label: 'Mi Perfil',
        icon: 'pi pi-user',
        command: () => this.viewProfile()
      },
      {
        label: 'Configuración',
        icon: 'pi pi-cog',
        command: () => this.openSettings()
      },
      {
        separator: true
      },
      {
        label: 'Cerrar Sesión',
        icon: 'pi pi-power-off',
        command: () => this.logout()
      }
    ];
  }

  toggleSidebar() {
    // Implementar lógica para mostrar/ocultar sidebar
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    // Implementar lógica para cambiar tema
  }

  onLanguageChange(event: any) {
    // Implementar lógica para cambiar idioma
  }

  viewProfile() {
    // Implementar lógica para ver perfil
  }

  openSettings() {
    // Implementar lógica para abrir configuración
  }

  logout() {
    // Implementar lógica para cerrar sesión
  }







  ////////////////////
  visible = signal<boolean>(true);
  
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: ['/dashboard']
    },
    {
      label: 'Administración',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'Usuarios',
          icon: 'pi pi-users',
          routerLink: ['/users']
        },
        {
          label: 'Roles',
          icon: 'pi pi-id-card',
          routerLink: ['/roles']
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
          routerLink: ['/reports/sales']
        },
        {
          label: 'Estadísticas',
          icon: 'pi pi-chart-line',
          routerLink: ['/reports/stats']
        }
      ]
    },
    {
      separator: true
    },
    {
      label: 'Documentación',
      icon: 'pi pi-book',
      url: 'https://documentation.example.com',
      target: '_blank'
    }
  ];

  // constructor(private router: Router) {}

  isActive(item: MenuItem): boolean {
    if (item.routerLink) {
      return this.router.isActive(item.routerLink[0], {
        paths: 'exact',
        queryParams: 'exact',
        fragment: 'ignored',
        matrixParams: 'ignored'
      });
    }
    return false;
  }
}
