import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, 
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

}
