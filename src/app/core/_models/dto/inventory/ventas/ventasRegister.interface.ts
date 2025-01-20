export interface SalesRegister {
  fechaCompra:            string;
  total:                  number;
  id_proveedor:           number;
  detalle:                SalesDetail[] | string;
  fechaVencimiento:       string;
}

export interface SalesDetail {
  cantidad:           number;
  precioUnitarioVent: number;
  precioVenta:        number;
  id_producto:        number;
}

export interface SalesDetailWithNameProduct extends SalesDetail {
  name_product:   string;
}

export interface RegistroVentasResult {
    p_resultado:  string;
    p_status:     number;
}