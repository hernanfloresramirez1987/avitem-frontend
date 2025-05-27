import { Component } from '@angular/core';
import { ClientsService } from '../../../../_services/clients.service';
import { UsersService } from '@/core/_services/common/user.service';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export default class ClientesComponent {
  clients: any[] = [];
  expedidoOptions!: { name: string; code: string }[];

  
  constructor(private usersServ: UsersService, private readonly clientServ: ClientsService) {
    this.usersServ.getExpedidoOptions().subscribe(t => this.expedidoOptions = t);
  }

  ngOnInit(): void {
    this.clientServ.getAllClients().subscribe((clients) => {
      this.clients = clients;
    });
  }
}
