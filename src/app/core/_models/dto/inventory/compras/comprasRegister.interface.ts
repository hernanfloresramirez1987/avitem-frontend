export interface PurcharseRegister {
  fechaCompra: string;
  total: number;
  id_proveedor: number;
  detalle: PurcharseDetail[];
}

export interface PurcharseDetail {
  cantidad: number;
  precioUnitario: number;
  id_producto: number;
}

export interface RegistroComprasResult {
    p_resultado: string;
    p_status: number;
}