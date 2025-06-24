import { ConfigQuery } from "../../../common/config.interface";
import { ComprasBaseFilter } from "./comprasSearch.interface.dto";

export interface ComprasDTO {
  config: ConfigQuery,
  filter: ComprasBaseFilter;
}
