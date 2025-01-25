import { VentasItem } from "./ventas.model";

export interface StateVentasResponseModel extends ComprasResp {
    loaded: boolean;
    loading: boolean;
    error: string | null;
  }

  export interface ComprasResp {
    data:          Array<VentasItem>;
    page:          number;
    rows:          number;
    total_records: number;
  }