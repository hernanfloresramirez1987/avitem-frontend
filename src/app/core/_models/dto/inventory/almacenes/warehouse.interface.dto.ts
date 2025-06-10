import { ConfigQuery } from "../../../common/config.interface";
import { WarehouseBaseFilter } from "./warehouseSearch.interface.dto";

export interface WarehouseDTO {
  config: ConfigQuery,
  filter:  WarehouseBaseFilter;
}
