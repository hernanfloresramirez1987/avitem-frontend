import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ProveedorRegister } from '../_models/dto/users/proveedors/proveedorRegister.interface';
import { ProveedorSaveResponse } from '../_models/users/proveedores/proveedoresSaveResponse';
import { ProductoDTO } from '../_models/dto/inventory/products/producto.interface.dto';
import { ProductResp } from '../_models/inventory/products/productResponse.interface';
import { ProductoRegister } from '../_models/dto/inventory/products/productoRegister.interface';
import { ProductSaveResponse } from '../_models/inventory/products/productSaveResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  readonly #url= environment.URL_API;

  constructor(private http: HttpClient) { }

  postProducts = (proveedorDto: ProductoDTO): Observable<ProductResp> => this.http.post<ProductResp>(`${this.#url}productos/list`, proveedorDto);

  postProduct = (employeeReg: ProductoRegister): Observable<ProductSaveResponse> => this.http.post<ProductSaveResponse>(`${this.#url}productos/register`, employeeReg);  
}
