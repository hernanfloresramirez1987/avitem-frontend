import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../_models/dto/users/employees/employee.interface.dto';
import { EmployeeResp } from '../_models/users/employees/employeeResponse.interface';
import { EmployeeRegister } from '../_models/dto/users/employees/employeeRegister.interface';
import { EmployeeSaveResponse } from '../_models/users/employees/employeeSaveResponse';
import { EmployeeItem } from '../_models/users/employees/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  readonly #url= environment.URL_API;

  constructor(private http: HttpClient) { }

  postEmployees = (employeeDto: EmployeeDTO | any): Observable<EmployeeResp> => this.http.post<EmployeeResp>(`${this.#url}empleados/list`, employeeDto);
  
  getEmployees = (): Observable<EmployeeItem[]> => this.http.post<EmployeeItem[]>(`${this.#url}empleados/list`, {});

  postEmployee = (employeeReg: EmployeeRegister): Observable<EmployeeSaveResponse> => this.http.post<EmployeeSaveResponse>(`${this.#url}empleados/register`, employeeReg);
  
}
