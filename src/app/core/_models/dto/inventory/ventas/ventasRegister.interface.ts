export interface SalesRegister {
  fechaVenta:             string;
  total:                  number;
  token_SIN:              string;
  id_cliente:             number;
  id_empleado:            number;
  confactura:             number;
  detalle:                SalesDetail[] | string;
}

export interface SalesDetail {
  cantidad:           number;
  precioUnitario:     number;
  // precioUnitVenta:    number;
  id_producto:        number;
}

export interface SalesDetailWithNameProduct extends SalesDetail {
  color:              string;
  name_product:   string;
}

export interface RegistroVentasResult {
    p_resultado:  string;
    p_status:     number;
}