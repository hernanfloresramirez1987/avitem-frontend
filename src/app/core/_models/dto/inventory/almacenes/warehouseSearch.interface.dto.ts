import { BaseSortQuery } from "../../../common/basesort.interface";
import { MatchModel } from "../../../common/matchmodel.interface";

export interface WarehouseBaseFilter { // extends BaseModelQuery {
  [key: string]: string | number | BaseSortQuery[] | MatchModel;
  id:               MatchModel;
  nombre:           MatchModel
  direcicon:        MatchModel;
  matriz:           MatchModel;
  matrizcapacidad:  MatchModel;
}