import { BaseSortQuery } from "../../common/basesort.interface";
import { MatchModel } from "../../common/matchmodel.interface";

export interface EmployeeBaseFilter { // extends BaseModelQuery {
    [key: string]: string | number | BaseSortQuery[] | MatchModel;
    account_id:    MatchModel;
  }