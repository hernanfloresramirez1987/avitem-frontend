import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleComprasService {
  readonly #url= `${environment.URL_API}detalle-compras/`;
  private readonly http: HttpClient = inject(HttpClient);

  getDetCompras = (id: number): Observable<any> => this.http.get<any>(`${ this.#url }items/${ id }`);
}
