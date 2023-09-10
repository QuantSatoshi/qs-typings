export declare type BUY = true;
export declare type SELL = true;
export declare type SignalBuySell = BUY | SELL;
export declare type TradeDbSchemaV2 = number[];
export interface FundingSchema {
    ts: number;
    rate: number;
    rateDaily: number;
}
export interface TradeDbSchema {
    _id?: any;
    s: 'b' | 's';
    r: number;
    a: number;
    c?: string;
    t: Date;
    ts: Date;
    tId: number | string;
    tIds?: (string | number)[];
    tIdO?: number | string;
    liq?: any;
    v?: number;
    qA?: number;
    gV?: number;
    code?: string;
}
