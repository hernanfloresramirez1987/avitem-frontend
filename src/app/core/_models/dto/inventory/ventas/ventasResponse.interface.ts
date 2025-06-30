export interface VentasResponse {
    id:             string;
    fechaVenta:     Date;
    total:          string;
    id_cliente:     number;
    id_empleado:    number;
    factura:        number;
}