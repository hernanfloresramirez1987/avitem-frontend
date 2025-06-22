import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlmacenesService {
  readonly #url= environment.URL_API;
  private readonly http: HttpClient = inject(HttpClient);
  
  getAllAlmacenes = (): Observable<any[]> => this.http.get<any[]>(`${this.#url}almacenes/list`);
  
}
