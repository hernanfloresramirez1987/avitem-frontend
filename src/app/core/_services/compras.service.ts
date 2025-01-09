import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { PurcharseRegister } from '../_models/dto/inventory/compras/comprasRegister.interface';
import { ComprasSaveResponse } from '../_models/inventory/compras/comprasSaveResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  readonly #url= environment.URL_API;

  constructor(private http: HttpClient) { }

  postProduct = (compraReg: PurcharseRegister): Observable<ComprasSaveResponse> => this.http.post<ComprasSaveResponse>(`${this.#url}compras/register`, compraReg);
}
