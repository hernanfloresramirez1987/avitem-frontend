import { BaseModelQuery } from "./basemodelquery.interface";

export interface ConfigQuery extends BaseModelQuery {
    populate_data: boolean;
}


