import { BaseSortQuery } from "../../common/basesort.interface";
import { ConfigQuery } from "../../common/config.interface";
import { MatchModel } from "../../common/matchmodel.interface";

export interface UserDTO {
  config: ConfigQuery,
  filter:  UserBaseFilter;
}

export interface UserBaseFilter { // extends BaseModelQuery {
  [key: string]: string | number | BaseSortQuery[] | MatchModel;
  id:           MatchModel;
  ciExpedit:    MatchModel;
  ciComplement: MatchModel;
  nombre:       MatchModel;
  app:          MatchModel;
  apm:          MatchModel;
  sexo:         MatchModel;
  fnaci:        MatchModel;
  direccion:    MatchModel;
  telefono:     MatchModel;
  email:        MatchModel;
  state:        MatchModel

  empresa:    MatchModel;
  nit:        MatchModel;
}