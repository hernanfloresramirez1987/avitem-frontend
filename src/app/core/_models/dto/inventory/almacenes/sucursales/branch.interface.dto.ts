import { ConfigQuery } from "@/core/_models/common/config.interface";
import { BranchBaseFilter } from "./branchSearch.interface.dto";

export interface BranchDTO {
  config: ConfigQuery,
  filter: BranchBaseFilter;
}
