import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternapiService {
  #apiUrl = 'http://127.0.0.1:8080/api/templates/'
  private readonly http: HttpClient = inject(HttpClient);

  postComponentsRedirecctions = (dto: any) => this.http.post(`${this.#apiUrl}postComponentsRedirecctions`, dto);

  postComponents = (dto: any) => this.http.post(`${this.#apiUrl}getcomponents`, dto);
}
