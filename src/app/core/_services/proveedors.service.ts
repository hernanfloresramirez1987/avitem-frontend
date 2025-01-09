import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ProveedorDTO } from '../_models/dto/users/proveedors/proveedor.interface.dto';
import { ProveedorResp } from '../_models/users/proveedores/proveedoresResponse.interface';
import { ProveedorRegister } from '../_models/dto/users/proveedors/proveedorRegister.interface';
import { ProveedorSaveResponse } from '../_models/users/proveedores/proveedoresSaveResponse';
import { ProveedorItem } from '../_models/users/proveedores/proveedores.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  readonly #url= environment.URL_API;

  constructor(private http: HttpClient) { }

  postProveedores = (proveedorDto: ProveedorDTO): Observable<ProveedorResp> => this.http.post<ProveedorResp>(`${this.#url}proveedores/list`, proveedorDto);

  postProveedor = (employeeReg: ProveedorRegister): Observable<ProveedorSaveResponse> => this.http.post<ProveedorSaveResponse>(`${this.#url}proveedores/register`, employeeReg);  

  postProveedoresSearch = (employeeReg: ProveedorDTO | null): Observable<ProveedorItem[]> => this.http.post<ProveedorItem[]>(`${this.#url}proveedores/list`, employeeReg);  
}
