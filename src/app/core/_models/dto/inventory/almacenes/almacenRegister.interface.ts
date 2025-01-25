export interface ProductoRegister {
  p_nombre:         string;
  p_descripcion:    string;
  p_cantidadStock:  number;
  p_fechaIngreso:   string;
  p_unidadMedida:   string;
}

export interface RegistroProductoResult {
    p_resultado: string;
    p_status: number;
}