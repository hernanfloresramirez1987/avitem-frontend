import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { SalesRegister } from '../_models/dto/inventory/ventas/ventasRegister.interface';
import { Observable } from 'rxjs';
import { VentaSaveResponse } from '../_models/inventory/ventas/ventaSaveResponse';
import { VentasDTO } from '../_models/dto/inventory/ventas/ventas.interface.dto';
import { VentasResp } from '../_models/inventory/ventas/ventasResponse.interface';
import { VentasResponse } from '../_models/dto/inventory/ventas/ventasResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  readonly #url= `${environment.URL_API}ventas/`;
  private readonly http: HttpClient = inject(HttpClient);


  postSaveVenta = (ventaReg: SalesRegister): Observable<VentaSaveResponse> => this.http.post<VentaSaveResponse>(`${this.#url}register`, ventaReg);

  postAllVentasSearch = (ventasdto: VentasDTO): Observable<VentasResp> => this.http.post<VentasResp>(`${this.#url}all_filter`, ventasdto);
  
  getVentas = (ventasDto: VentasDTO): Observable<VentasResp> => this.http.get<VentasResp>(`${this.#url}`)
  
  getOneVenta = (id: number): Observable<VentasResponse> => this.http.get<any>(`${this.#url}${id}`);
}
