import { Component, inject, OnInit, signal } from '@angular/core';
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
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';

import Aura from '@primeng/themes/aura';
import { CardModule } from 'primeng/card';
import { ToggleSwitchModule } from 'primeng/toggleswitch';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ButtonModule, SidebarComponent, CardModule, ToggleSwitchModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  isDarkMode = signal(false);

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
    this.isDarkMode.set(!this.isDarkMode());
  }

  title = 'avitem-frontend';

//   toggleDarkMode() {
//     const element = document.querySelector('html');
//     element.classList.toggle('my-app-dark');
// }



languages: any[];
  selectedLanguage: any;
  //  : boolean = false;
  items: MenuItem[];

  sidebarVisible: boolean = true;
  
  constructor(private router: Router) {
    // this.primeng.theme.set({
    //   preset: Aura,
    //   // options: {
    //   //   darkModeSelector: '.dark',
    //   // },
    // });


    this.languages = [
      { name: 'English', code: 'en' },
      { name: 'Español', code: 'es' }
    ];
    
    this.items = [
      {
        label: 'Mi Perfil',
        icon: 'pi pi-user',
        command: () => console.log('viewProfile(')
      },
      {
        label: 'Configuración',
        icon: 'pi pi-cog',
        command: () => console.log('openSettings(')
      },
      {
        separator: true
      },
      {
        label: 'Cerrar Sesión',
        icon: 'pi pi-power-off',
        command: () => console.log('logout(')
      }
    ];
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
