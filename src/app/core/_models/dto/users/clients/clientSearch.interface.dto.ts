import { BaseSortQuery } from "../../../common/basesort.interface";
import { MatchModel } from "../../../common/matchmodel.interface";

export interface ClientBaseFilter { // extends BaseModelQuery {
    [key: string]: string | number | BaseSortQuery[] | MatchModel;
    id:    MatchModel;
    nombre: MatchModel;
    app:    MatchModel;
    apm:    MatchModel;
  }