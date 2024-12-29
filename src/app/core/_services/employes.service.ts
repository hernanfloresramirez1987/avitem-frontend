import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  readonly #url= environment.URL_API;

  constructor(private http: HttpClient) { }

  getEmployees = (): Observable<any[]> => this.http.get<any[]>(`${this.#url}empleados/`);

  postEmployee = (employeeReg: any): Observable<any> => this.http.post(`${this.#url}/register`, employeeReg);
  
}
