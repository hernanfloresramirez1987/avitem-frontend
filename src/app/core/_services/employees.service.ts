import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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
  readonly #url= `${ environment.URL_API }empleados/`;
  
  private readonly http: HttpClient = inject(HttpClient);

  postEmployees = (employeeDto: EmployeeDTO | any): Observable<EmployeeResp> => this.http.post<EmployeeResp>(`${this.#url}list`, employeeDto);
  
  getEmployees = (): Observable<EmployeeItem[]> => this.http.post<EmployeeItem[]>(`${this.#url}list`, {});

  postSaveEmployee = (employeeReg: EmployeeRegister): Observable<EmployeeSaveResponse> => this.http.post<EmployeeSaveResponse>(`${this.#url}register`, employeeReg);
  
}
