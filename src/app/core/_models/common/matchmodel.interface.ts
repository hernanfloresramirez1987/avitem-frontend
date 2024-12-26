export interface MatchModel {
    //equals, contains, in, lte
    match_mode: string;
    value: string | number[] | string[];
}