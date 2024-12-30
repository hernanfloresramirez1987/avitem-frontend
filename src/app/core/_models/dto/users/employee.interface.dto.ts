import { ConfigQuery } from "../../common/config.interface";
import { EmployeeBaseFilter } from "./employeesearch.interface.dto";

export interface EmployeeDTO {
  config: ConfigQuery,
  filter:  EmployeeBaseFilter;
}

