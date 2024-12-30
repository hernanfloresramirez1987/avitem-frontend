import { ProveedorItem } from "./proveedores.model";

export interface StateProveedorResponseModel extends ProveedorResp {
    loaded: boolean;
    loading: boolean;
    error: string | null;
  }

  export interface ProveedorResp {
    data:          Array<ProveedorItem>;
    page:          number;
    rows:          number;
    total_records: number;
  }