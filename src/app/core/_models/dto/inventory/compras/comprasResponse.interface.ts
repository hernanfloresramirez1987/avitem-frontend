import { ProveedorResponse } from "../../users/proveedors/proveedorResponse.interface";

export interface ComprasResponse {
    id:          string;
    fechaCompra: Date;
    total:       string;
    proveedor:   ProveedorResponse;
}