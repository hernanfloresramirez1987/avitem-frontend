import { ClienteItem } from "./clientesSearch.model";

export interface StateClienteResponseModel extends ClienteResp {
    loaded: boolean;
    loading: boolean;
    error: string | null;
  }

  export interface ClienteResp {
    data:          Array<ClienteItem>;
    page:          number;
    rows:          number;
    total_records: number;
  }