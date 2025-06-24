import { BaseSortQuery } from "../../../common/basesort.interface";
import { MatchModel } from "../../../common/matchmodel.interface";

export interface InventaryBaseFilter { // extends BaseModelQuery {
  [key: string]: string | number | BaseSortQuery[] | MatchModel;
  id:                 MatchModel;
  nombre:             MatchModel
  idLote:             MatchModel;
  matriz:             MatchModel;
  matrizcapacidad:    MatchModel;
  cantidadDespachada: MatchModel;
  cantidadReservada:  MatchModel;
  cantidadStock:      MatchModel;
  fechaIngreso:       MatchModel;
  fechaInventario:    MatchModel;
  fechaSalida:        MatchModel;
  nombreAlmacen:      MatchModel;
}