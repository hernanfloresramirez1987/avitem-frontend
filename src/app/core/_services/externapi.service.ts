import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternapiService {
  #apiUrl = 'http://127.0.0.1:8080/api/templates/'

  constructor(private http: HttpClient) { }

  postComponentsRedirecctions = (dto: any) => this.http.post(`${this.#apiUrl}postComponentsRedirecctions`, dto);

  postComponents = (dto: any) => this.http.post(`${this.#apiUrl}getcomponents`, dto);
}
