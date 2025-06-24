import { MatchModel } from "@/core/_models/common/matchmodel.interface";
import { BaseSortQuery } from "@/core/_models/common/basesort.interface";

export interface BranchBaseFilter { // extends BaseModelQuery {
  [key: string]: string | number | BaseSortQuery[] | MatchModel;
  id:               MatchModel;
  nombre:           MatchModel
  direcicon:        MatchModel;
  matriz:           MatchModel;
  matrizcapacidad:  MatchModel;
}