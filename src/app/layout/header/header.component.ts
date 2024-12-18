import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  visibleSidebar = signal<boolean>(false);

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
