import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { WarehouseResp } from '../_models/inventory/almacenes/warehouse.Response';
import { InventaryDTO } from '../_models/dto/inventory/almacenes/inventary.interface.dto';

@Injectable({
  providedIn: 'root'
})
export class InventoriesService {
  readonly #url= environment.URL_API;
  private readonly http: HttpClient = inject(HttpClient);

  getAllWarehouses = (warehousesdto: InventaryDTO): Observable<WarehouseResp> => this.http.post<WarehouseResp>(`${this.#url}inventarios/all_filter`, warehousesdto);
}