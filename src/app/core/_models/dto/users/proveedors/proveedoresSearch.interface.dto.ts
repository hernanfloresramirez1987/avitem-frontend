import { BaseSortQuery } from "../../../common/basesort.interface";
import { MatchModel } from "../../../common/matchmodel.interface";

export interface ProveedorBaseFilter { // extends BaseModelQuery {
    [key: string]: string | number | BaseSortQuery[] | MatchModel;
    account_id:    MatchModel;
    bin:           MatchModel;
    kardex:       MatchModel;
    category_id:   MatchModel;
    is_serialized: MatchModel;
    location:      MatchModel;
    lot:           MatchModel;
    lpn:           MatchModel;
    qty:           MatchModel;
    sku:           MatchModel;
    volume:        MatchModel;
  }