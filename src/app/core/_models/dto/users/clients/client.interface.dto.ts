import { ConfigQuery } from "../../../common/config.interface";
import { ClientBaseFilter } from "./clientSearch.interface.dto";

export interface ClientDTO {
  config: ConfigQuery,
  filter:  ClientBaseFilter;
}

