import { ComprasItem } from "./compras.model";

export interface StateComprasResponseModel extends ProductResp {
    loaded: boolean;
    loading: boolean;
    error: string | null;
  }

  export interface ProductResp {
    data:          Array<ComprasItem>;
    page:          number;
    rows:          number;
    total_records: number;
  }