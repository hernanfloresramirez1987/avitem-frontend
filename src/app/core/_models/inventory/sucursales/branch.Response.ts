import Metadata from "../../common/metadata.interface";
import { BranchItem } from "./branch.interface";

export interface StateBranchResponseModel extends BranchResp {
  loading:  boolean;
  error:    string | null;
}

export interface BranchResp {
  data:          Array<BranchItem>;
  metadata:      Metadata;
}