export interface PurcharseRegister {
  fechaCompra:            string;
  total:                  number;
  id_proveedor:           number;
  detalle:                PurcharseDetail[] | string;
  fechaVencimiento:       string;
}

export interface PurcharseDetail {
  cantidad:       number;
  precioUnitario: number;
  precioVenta:    number;
  id_producto:    number;
  id_almacen:     number;
  color?:          string;
}

export interface PurcharseDetailWithNameProduct extends PurcharseDetail {
  name_product:   string;
}

export interface RegistroComprasResult {
    p_resultado:  string;
    p_status:     number;
}