import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ClientRegister } from '../_models/dto/users/clients/clientRegister.interface';
import { ClienteSaveResponse } from '../_models/users/clients/clientesSaveResponse';
import { ClientDTO } from '../_models/dto/users/clients/client.interface.dto';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  readonly #url= `${ environment.URL_API }clientes/`;
  readonly #http: HttpClient = inject(HttpClient);
  
  postClients = (clientDto: ClientDTO | any): Observable<ClienteSaveResponse> => this.#http.post<ClienteSaveResponse>(`${this.#url}list`, clientDto);

  getAllClients = (): Observable<any[]> => this.#http.get<any[]>(`${this.#url}`);

  postSaveCliente = (employeeReg: ClientRegister): Observable<ClienteSaveResponse> => this.#http.post<ClienteSaveResponse>(`${this.#url}register`, employeeReg);  

}
