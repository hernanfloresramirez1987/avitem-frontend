import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { BranchDTO } from '../_models/dto/inventory/almacenes/sucursales/branch.interface.dto';
import { BranchResp } from '../_models/inventory/sucursales/branch.Response';
import { BranchItem } from '../_models/inventory/sucursales/branch.interface';

@Injectable({
  providedIn: 'root'
})
export class AlmacenesService {
  readonly #url= `${environment.URL_API}almacenes/`;

  private readonly http: HttpClient = inject(HttpClient);
  
  getAllSucursalesFiler = (dto: BranchDTO): Observable<BranchResp> => this.http.post<BranchResp>(`${this.#url}list`, dto);
  
  getAll = (): Observable<BranchItem[]> => this.http.get<BranchItem[]>(`${this.#url}`);
}
