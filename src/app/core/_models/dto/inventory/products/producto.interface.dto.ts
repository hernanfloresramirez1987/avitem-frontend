import { ConfigQuery } from "../../../common/config.interface";
import { ProductoBaseFilter } from "./productosSearch.interface.dto";

export interface ProductoDTO {
  config: ConfigQuery,
  filter:  ProductoBaseFilter;
}
