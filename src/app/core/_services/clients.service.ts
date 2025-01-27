import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  readonly #url= environment.URL_API;
  private readonly http: HttpClient = inject(HttpClient);

  getAllClients = (): Observable<any[]> => this.http.get<any[]>(`${this.#url}clientes`);


}
