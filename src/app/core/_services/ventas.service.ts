import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { SalesRegister } from '../_models/dto/inventory/ventas/ventasRegister.interface';
import { Observable } from 'rxjs';
import { VentaSaveResponse } from '../_models/inventory/ventas/ventaSaveResponse';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  readonly #url= environment.URL_API;
  private readonly http: HttpClient = inject(HttpClient);


  postSaveVenta = (ventaReg: SalesRegister): Observable<VentaSaveResponse> => this.http.post<VentaSaveResponse>(`${this.#url}proveedores/register`, ventaReg);
  
}
