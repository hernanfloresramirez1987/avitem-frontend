import { SupplierItem } from "./supplier.model";

export interface StateSupplierResponseModel extends SupplierResp {
    loaded: boolean;
    loading: boolean;
    error: string | null;
  }

  export interface SupplierResp {
    data:          Array<SupplierItem>;
    page:          number;
    rows:          number;
    total_records: number;
  }