import { ComprasItem } from "./compras.model";

export interface StateComprasResponseModel extends ComprasResp {
    loaded: boolean;
    loading: boolean;
    error: string | null;
  }

  export interface ComprasResp {
    data:          Array<ComprasItem>;
    page:          number;
    rows:          number;
    total_records: number;
  }