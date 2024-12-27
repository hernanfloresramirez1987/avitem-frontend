import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export default class UsersComponent {

}
