import { ConfigQuery } from "../../../common/config.interface";
import { EmployeeBaseFilter } from "./employeeSearch.interface.dto";

export interface EmployeeDTO {
  config: ConfigQuery,
  filter:  EmployeeBaseFilter;
}

