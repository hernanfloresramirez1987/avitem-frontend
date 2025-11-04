/*export interface VentasResponse {
    id:             string;
    no:             string;
    fechaVenta:     Date;
    total:          string;
    id_cliente:     number;
    id_empleado:    number;
    factura:        number;
}*/

import { PersonaItem } from "@/core/_models/users/persona.interface";

export interface VentasResponse {
    id:         string;
    no:         string;
    fechaVenta: Date;
    total:      string;
    tokenSIM:   string;
    confactura: boolean;
    cliente:    Cliente;
}

export interface Cliente {
    id:         string;
    ci:         number;
    nit:        number;
    state:      number;
    persona:    PersonaItem
}