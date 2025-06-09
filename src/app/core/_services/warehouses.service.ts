import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WarehouseItem } from '../_models/inventory/almacenes/warehouse.model';
import { environment } from 'src/environments/environment.development';
import { WarehouseDTO } from '../_models/dto/inventory/almacenes/warehouse.interface.dto';
import { WarehouseResp } from '../_models/inventory/almacenes/warehouse.Response';

@Injectable({
  providedIn: 'root'
})
export class WarehousesService {
  readonly #url= environment.URL_API;
  private readonly http: HttpClient = inject(HttpClient);

  getAllWarehouses = (warehousesdto: WarehouseDTO): Observable<WarehouseResp> => this.http.post<WarehouseResp>(`${this.#url}inventarios/all_filter`, warehousesdto);
}