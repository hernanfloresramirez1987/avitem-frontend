export interface ProductoRegister {
  p_nombre:         string;
  p_descripcion:    string;
  p_cantidadStock:  number;
  p_fechaIngreso:   string;
  p_unidadMedida:   string;
  p_codigoProducto: string;
  p_idProveedor:    number;
  p_idCategoria:    number;
  p_state:          number;
}

export interface RegistroProductoResult {
    p_resultado: string;
    p_status: number;
}