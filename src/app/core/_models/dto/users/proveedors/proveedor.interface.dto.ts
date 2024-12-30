import { ConfigQuery } from "../../../common/config.interface";
import { ProveedorBaseFilter } from "./proveedoresSearch.interface.dto";

export interface ProveedorDTO {
  config: ConfigQuery,
  filter:  ProveedorBaseFilter;
}

