import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {
  readonly #url= environment.URL_API;

  constructor(private http: HttpClient) { }
  
  getAllColores = (): Observable<{ id: number, code: string, color: string }[]> => this.http.get<{ id: number, code: string, color: string }[]>(`${this.#url}colores`);
  
}
