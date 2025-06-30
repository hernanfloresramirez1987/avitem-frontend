import Metadata from "../../common/metadata.interface";
import { ComprasItem } from "./compras.model";

export interface StateComprasResponseModel extends ComprasResp {
    loading: boolean;
    error: string | null;
  }

  export interface ComprasResp {
    data:     Array<ComprasItem>;
    metadata: Metadata;
  }