export class PriceData {
    constructor(
        public date: string,
        public open: number,
        public high: number,
        public low: number,
        public close: number,
        public adjClose: number,
        public volumne: number,
        public unadjustedVolume: number,
        public change: number,
        public changePercent: number,
        public vwap: number,
        public label: string,
        changeOverTime: number
    ){}
}
