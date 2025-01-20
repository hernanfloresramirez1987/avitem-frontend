import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  readonly #url= environment.URL_API;

  constructor(private http: HttpClient) { }
  
  getAllCategolias = (): Observable<{ id: number, nombre: string, descripcion: string }[]> => this.http.get<{ id: number, nombre: string, descripcion: string }[]>(`${this.#url}categorias`);
  
}
