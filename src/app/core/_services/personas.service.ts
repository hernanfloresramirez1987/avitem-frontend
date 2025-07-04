import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, of } from 'rxjs';
import { ProveedorDTO } from '../_models/dto/users/proveedors/proveedor.interface.dto';
import { ProveedorResp } from '../_models/users/proveedores/proveedoresResponse.interface';
import { ProveedorRegister } from '../_models/dto/users/proveedors/proveedorRegister.interface';
import { ProveedorSaveResponse } from '../_models/users/proveedores/proveedoresSaveResponse';
import { ProveedorItem } from '../_models/users/proveedores/proveedores.model';
import { PersonaItem } from '../_models/users/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  readonly #url= environment.URL_API;
  readonly #http: HttpClient = inject(HttpClient);

  postEmployees = (proveedorDto: ProveedorDTO): Observable<ProveedorResp> => this.#http.post<ProveedorResp>(`${this.#url}empleados/list`, proveedorDto);

  getEmployeeCI = (employeeSearchCI: number): Observable<ProveedorItem> => this.#http.get<ProveedorItem>(`${this.#url}personas/searchCI/${employeeSearchCI}`);

  getPersonaCI = (personSearchCI: number): Observable<PersonaItem> => this.#http.get<PersonaItem>(`${this.#url}personas/searchCI/${personSearchCI}`);

  getSexo = (sexo: string) => (sexo === 'V') ? 'Varon' : 'Mujer';
}
