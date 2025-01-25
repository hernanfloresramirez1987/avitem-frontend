import { ConfigQuery } from "../../../common/config.interface";
import { AlmacenBaseFilter } from "./almacenesSearch.interface.dto";

export interface AlmacenDTO {
  config: ConfigQuery,
  filter:  AlmacenBaseFilter;
}
