export class MatchModelDto{

    constructor(
        public matchMode: string, // | undefined,
        public value: boolean | string | number | Array<number>
    ){}
}
