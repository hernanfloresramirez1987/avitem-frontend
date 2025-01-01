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
export class CategoriasService {
  readonly #url= environment.URL_API;

  constructor(private http: HttpClient) { }
  getAll = (): Observable<{ id: number, nombre: string, descripcion: string }[]> => this.http.get<{ id: number, nombre: string, descripcion: string }[]>(`${this.#url}categorias`);
  
}
