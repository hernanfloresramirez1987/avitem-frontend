import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { PurcharseRegister } from '../_models/dto/inventory/compras/comprasRegister.interface';
import { ComprasSaveResponse } from '../_models/inventory/compras/comprasSaveResponse';
import { Observable } from 'rxjs';
import { ComprasDTO } from '../_models/dto/inventory/compras/compras.interface.dto';
import { ComprasResp } from '../_models/inventory/compras/comprasResponse.interface';
import { ComprasResponse } from '../_models/dto/inventory/compras/comprasResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  readonly #url= `${environment.URL_API}compras/`;
  private readonly http: HttpClient = inject(HttpClient);

  postSaveCompras = (compraReg: PurcharseRegister): Observable<ComprasSaveResponse> => this.http.post<ComprasSaveResponse>(`${this.#url}register`, compraReg);
  
  postAllComprasSearch = (comprasDto: ComprasDTO): Observable<ComprasResp> => this.http.post<ComprasResp>(`${this.#url}all_filter`, comprasDto);

  getCompras = (comprasDto: ComprasDTO): Observable<ComprasResp> => this.http.get<ComprasResp>(`${this.#url}`)

  getOneCompra = (id: number): Observable<ComprasResponse> => this.http.get<any>(`${this.#url}${id}`);
}
