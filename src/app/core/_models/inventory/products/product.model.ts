export interface ProductItem {
    id:             number;
    nombre:         string;
    descripcion:    string;
    cantidadStock:  number;
    fechaIngreso:   string;
    empresa:        string;
    color:          string;
    unidadMedida:   string;
    codigoProducto: string;
    state:          number;
    id_proveedor:   number;
    id_categoria:   number;
}