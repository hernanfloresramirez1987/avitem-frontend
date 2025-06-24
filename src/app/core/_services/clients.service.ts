import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { ClientRegister } from '../_models/dto/users/clients/clientRegister.interface';
import { ClienteSaveResponse } from '../_models/users/clients/clientesSaveResponse';
import { ClientDTO } from '../_models/dto/users/clients/client.interface.dto';
import { ClienteResp } from '../_models/users/clients/clientesResponse.interface';
import { PersonaItem } from '../_models/users/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  readonly #url= `${ environment.URL_API }clientes/`;
  readonly #http: HttpClient = inject(HttpClient);
  
  postClients = (clientDto: ClientDTO): Observable<ClienteResp> => this.#http.post<ClienteResp>(`${this.#url}list`, clientDto)
    .pipe(map(t => {console.log(t); return t; }));

  getAllClients = (): Observable<any[]> => this.#http.get<any[]>(`${this.#url}`);

  postSaveCliente = (employeeReg: ClientRegister): Observable<ClienteSaveResponse> => this.#http.post<ClienteSaveResponse>(`${this.#url}register`, employeeReg);  

  getClienteCI = (cidto: number): Observable<PersonaItem> => this.#http.get<PersonaItem>(`${this.#url}searchCI/${cidto}`);  

}
