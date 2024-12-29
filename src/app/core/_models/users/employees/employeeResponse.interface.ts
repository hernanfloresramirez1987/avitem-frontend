import { EmployeeItem } from "./employee.model";

export interface StateEmployeeResponseModel extends EmployeeResp {
    loaded: boolean;
    loading: boolean;
    error: string | null;
  }

  export interface EmployeeResp {
    data:          Array<EmployeeItem>;
    page:          number;
    rows:          number;
    total_records: number;
  }