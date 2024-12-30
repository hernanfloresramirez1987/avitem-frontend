import { Injectable } from '@angular/core';
import { MatchModel } from '../../_models/common/matchmodel.interface';
import { FilterMetadata } from 'primeng/api';
import { FiltersShip } from '../../components/lib/filter-clear-component/filters.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterApplyService {

  constructor() { }

  applyFilterNew(filters: any, search: any): any {
    for (const key in filters) {
      const llav = key;
      const filterValue = filters[llav];
      if (Array.isArray(filterValue)) {
        search[llav] = filterValue;
      } else if (Array.isArray(filterValue.value)) {
        const matchMode = filterValue.matchMode || "";
        const value = filterValue.value.map((item: { id: number }) => item.id) || "";
        search[llav] = {
          match_mode: matchMode,
          value: value
        };
        if(filterValue.value !== null) {
          search[llav] = {
            match_mode: matchMode,
            value: value
          };
          /*this.searchTxt.update(t => [...t, {
            match_mode: key,
            value
          }])*/
        } //console.log(this.searchTxt())
      } else {
        search[llav] = {
          match_mode: filterValue.matchMode,
          value: filterValue.value || ""
        };
        if(filterValue.value !== null) {
          /*this.searchTxt.update(t => [...t, {
            match_mode: key,
            value: filterValue.value
          }])*/
        }
      }
    }
    return search;
  }
  applyFilter(filters: any, search: any): any {
    for (const key in filters) {
      const llav = key;
      let sear: any;
      const processFilter = (filter: any) => {
        (search[llav] as MatchModel).match_mode = filter.matchMode || "";
        if (filter.value && Array.isArray(filter.value)) {
          sear = filter.value.map((s: { id: any; }) => s.id);
        } else {
          sear = filter.value || "";
        }
      }

      if (Array.isArray(filters[llav])) {
        filters[llav].forEach((filter: any) => processFilter(filter));
      } else {
        processFilter(filters[llav]);
      }

      (search[llav] as MatchModel).value = sear;
    }
    return search;
  }
  preparaFiltersChip(filters: { [s: string]: FilterMetadata | FilterMetadata[] | undefined }, arraysDesc: any): FiltersShip[];
  preparaFiltersChip(filters: { [s: string]: FilterMetadata | FilterMetadata[] | undefined }): FiltersShip[]
  preparaFiltersChip(filters: { [s: string]: FilterMetadata | FilterMetadata[] | undefined }, arraysDesc?: any): FiltersShip[] {
    let filterschip: FiltersShip[];
    filterschip = [];
    if (filters) {
      for (let keye in filters) {
        if ((filters[keye] as FilterMetadata).value) {
          let val = (filters[keye] as FilterMetadata).value;
          if (Array.isArray(val)) {
            let campo = "id";
            if (arraysDesc){
              let aprocess = arraysDesc[keye];
              campo=aprocess.campo;
            }
            val = val.map((item) => item[campo]).join(',');
          }
          let nuevo = {} as FiltersShip
          nuevo.valor = val;
          nuevo.key = keye;
          filterschip.push(nuevo);
        }
      }
    }
    return filterschip;
  }

}
