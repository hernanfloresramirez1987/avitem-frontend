import Metadata from "../../common/metadata.interface";
import { VentasItem } from "./ventas.model";

export interface StateVentasResponseModel extends VentasResp {
    loading: boolean;
    error: string | null;
  }

  export interface VentasResp {
    data:     Array<VentasItem>;
    metadata: Metadata;
  }