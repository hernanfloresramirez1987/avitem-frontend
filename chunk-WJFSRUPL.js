import{a as s}from"./chunk-DXQWHOOQ.js";import{a as r}from"./chunk-KCMXHSW5.js";import{V as o,_ as a,o as e}from"./chunk-PQPLRZS3.js";var h=(()=>{class i{#t;constructor(d){this.http=d,this.#t=s.URL_API,this.getUnidsMedida=()=>e([{medida:"Unidad"},{medida:"Juego o set"},{medida:"Kilogramo"},{medida:"Tonelada"},{medida:"Metro c\xFAbico"},{medida:"Litro"},{medida:"Gal\xF3n"},{medida:"Metro"},{medida:"Cent\xEDmetro"},{medida:"Mil\xEDmetro"},{medida:"Pie"},{medida:"Hoja"},{medida:"Paquete"},{medida:"Metro cuadrado"},{medida:"Caja"},{medida:"Bolsa o saco"},{medida:"Paquete"},{medida:"Gramo"},{medida:"Litro"},{medida:"Mililitro"},{medida:"Barril"},{medida:"Pieza"},{medida:"Conjunto"},{medida:"Metro lineal"},{medida:"Pallet"},{medida:"Contenedor"},{medida:"Marca personalizada"},{medida:"Unidades combinadas"}]),this.postProducts=t=>this.http.post(`${this.#t}productos`,t),this.postProductsGet=t=>this.http.get(`${this.#t}productos`),this.postProductscProveedor=t=>this.http.get(`${this.#t}productos/list/${t}`),this.postProduct=t=>this.http.post(`${this.#t}productos/register`,t)}static{this.\u0275fac=function(t){return new(t||i)(a(r))}}static{this.\u0275prov=o({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{h as a};
