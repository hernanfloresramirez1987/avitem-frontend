import { ConfigQuery } from "../../../common/config.interface";
import { VentasBaseFilter } from "./ventasSearch.interface.dto";

export interface VentasDTO {
  config: ConfigQuery,
  filter:  VentasBaseFilter;
}
