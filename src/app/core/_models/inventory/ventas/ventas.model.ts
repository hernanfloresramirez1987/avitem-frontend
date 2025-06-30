export interface VentasItem {
    id:         string;
    fechaventa: Date;
    total:      string;
    cliente:    Cliente;
}

export interface Cliente {
    id:    string;
    ci:    number;
    nit:   number;
    state: number;
}
