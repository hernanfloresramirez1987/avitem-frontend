import { VentasItem } from "./ventas.model";

export interface StateVentasResponseModel extends VentasResp {
    loading: boolean;
    error: string | null;
  }

  export interface VentasResp {
    data:          Array<VentasItem>;
    page:          number;
    rows:          number;
    total_records: number;
  }