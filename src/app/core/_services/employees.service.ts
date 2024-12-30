import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../_models/dto/users/employee.interface.dto';
import { EmployeeResp } from '../_models/users/employees/employeeResponse.interface';
import { EmployeeRegister } from '../_models/dto/users/employeeRegister.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  readonly #url= environment.URL_API;

  constructor(private http: HttpClient) { }

  postEmployees = (employeeDto: EmployeeDTO): Observable<EmployeeResp> => this.http.post<EmployeeResp>(`${this.#url}empleados/`, employeeDto);

  postEmployee = (employeeReg: EmployeeRegister): Observable<any> => this.http.post(`${this.#url}empleados/register`, employeeReg);
  
}
