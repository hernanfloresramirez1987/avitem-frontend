import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, of } from 'rxjs';
import { ProductoDTO } from '../_models/dto/inventory/products/producto.interface.dto';
import { ProductResp } from '../_models/inventory/products/productResponse.interface';
import { ProductoRegister } from '../_models/dto/inventory/products/productoRegister.interface';
import { ProductSaveResponse } from '../_models/inventory/products/productSaveResponse';
import { ProductItem } from '../_models/inventory/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  readonly #url= `${environment.URL_API}productos/`;
  private readonly http: HttpClient = inject(HttpClient);

  getUnidsMedida = (): Observable<any[]> => {
    return of([
    { medida: "Unidad" },
    { medida: "Juego o set"},
    { medida: "Kilogramo"},
    { medida: "Tonelada"},
    { medida: "Metro cúbico"},
    { medida: "Litro"},
    { medida: "Galón"},
    { medida: "Metro"},
    { medida: "Centímetro"},
    { medida: "Milímetro"},
    { medida: "Pie"},
    { medida: "Hoja"},
    { medida: "Paquete"},
    { medida: "Metro cuadrado"},
    { medida: "Caja"},
    { medida: "Bolsa o saco"},
    { medida: "Paquete"},
    { medida: "Gramo"},
    { medida: "Litro"},
    { medida: "Mililitro"},
    { medida: "Barril"},
    { medida: "Pieza"},
    { medida: "Conjunto"},
    { medida: "Metro lineal"},
    { medida: "Pallet"},
    { medida: "Contenedor"},
    { medida: "Marca personalizada"},
    { medida: "Unidades combinadas"},
  ])};

  postProducts = (proveedorDto: ProductoDTO): Observable<ProductResp> => this.http.post<ProductResp>(`${this.#url}`, proveedorDto);
  
  postProductsGet = (): Observable<ProductItem[]> => this.http.get<ProductItem[]>(`${this.#url}`);
  
  postProductscProveedor = (idProvider: number): Observable<ProductItem[]> => this.http.get<ProductItem[]>(`${this.#url}list/${idProvider}`);

  postSaveProduct = (employeeReg: ProductoRegister): Observable<ProductSaveResponse> => this.http.post<ProductSaveResponse>(`${this.#url}register/`, employeeReg);  
}