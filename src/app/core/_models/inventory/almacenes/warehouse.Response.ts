import Metadata from "../../common/metadata.interface";
import { WarehouseItem } from "./warehouse.model";

export interface StateWarehouseResponseModel extends WarehouseResp {
    loading: boolean;
    error: string | null;
  }

  export interface WarehouseResp {
    data:          Array<WarehouseItem>;
    metadata:      Metadata;
  }