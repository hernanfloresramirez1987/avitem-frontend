import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { PurcharseRegister } from '../_models/dto/inventory/compras/comprasRegister.interface';
import { ComprasSaveResponse } from '../_models/inventory/compras/comprasSaveResponse';
import { Observable } from 'rxjs';
import { ComprasDTO } from '../_models/dto/inventory/compras/compras.interface.dto';
import { ComprasResp } from '../_models/inventory/compras/comprasResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  readonly #url= environment.URL_API;
  private readonly http: HttpClient = inject(HttpClient);

  postSaveCompras = (compraReg: PurcharseRegister): Observable<ComprasSaveResponse> => this.http.post<ComprasSaveResponse>(`${this.#url}compras/register`, compraReg);
  
  postComprasSearch = (comprasDto: ComprasDTO): Observable<ComprasSaveResponse> => this.http.post<ComprasSaveResponse>(`${this.#url}compras/register`, comprasDto);

  getCompras = (comprasDto: ComprasDTO): Observable<ComprasResp> => this.http.get<ComprasResp>(`${this.#url}compras`)


}
