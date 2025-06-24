import { ConfigQuery } from "../../../common/config.interface";
import { InventaryBaseFilter } from "./inventarySearch.interface.dto";

export interface InventaryDTO {
  config: ConfigQuery,
  filter: InventaryBaseFilter;
}
