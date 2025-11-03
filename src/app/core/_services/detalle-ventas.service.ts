import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentasService {
  readonly #url= `${environment.URL_API}detalle-ventas/`;
  private readonly http: HttpClient = inject(HttpClient);

  getDetVentas = (id: number): Observable<any> => this.http.get<any>(`${ this.#url }items/${ id }`);
}