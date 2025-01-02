import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ProveedorDTO } from '../_models/dto/users/proveedors/proveedor.interface.dto';
import { ProveedorResp } from '../_models/users/proveedores/proveedoresResponse.interface';
import { ProveedorRegister } from '../_models/dto/users/proveedors/proveedorRegister.interface';
import { ProveedorSaveResponse } from '../_models/users/proveedores/proveedoresSaveResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  readonly #url= environment.URL_API;

  constructor(private http: HttpClient) { }

  postEmployees = (proveedorDto: ProveedorDTO): Observable<ProveedorResp> => this.http.post<ProveedorResp>(`${this.#url}productos/list`, proveedorDto);

  postEmployee = (employeeReg: ProveedorRegister): Observable<ProveedorSaveResponse> => this.http.post<ProveedorSaveResponse>(`${this.#url}productos/register`, employeeReg);  
}
