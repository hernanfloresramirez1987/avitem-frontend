import { BaseSortQuery } from "./basesort.interface";

export interface BaseModelQuery {
    page: number;
    rows: number;
    sort_field: BaseSortQuery[] | string;
}
