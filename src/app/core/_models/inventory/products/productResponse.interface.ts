import { ProductItem } from "./product.model";

export interface StateProductResponseModel extends ProductResp {
    loaded: boolean;
    loading: boolean;
    error: string | null;
  }

  export interface ProductResp {
    data:          Array<ProductItem>;
    page:          number;
    rows:          number;
    total_records: number;
  }