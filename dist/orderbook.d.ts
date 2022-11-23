export interface ObStreamShared {
    c: number;
    pair?: string;
    b?: number[][];
    a?: number[][];
    ts: number;
    e: 's' | 'u';
}
export interface InternalOb {
    s: 0 | 1;
    r: number;
    a: number;
    id: number;
    idx?: number;
}
export interface OrderBookBase {
    bids: OrderBookItem[];
    asks: OrderBookItem[];
}
export interface OrderBookDataSchema extends OrderBookBase {
    ts: Date;
    pair?: string;
    exchange?: string;
    code?: number;
    v?: number;
}
export interface OrderBookSchema extends OrderBookBase {
    _id?: any;
    ts: number;
    exchange?: string;
    c: number;
    v?: number;
    pairDb?: string;
    pair?: string;
}
export interface OrderBookItem {
    a: number;
    r: number;
}
export declare type OrderBookSchemaV2 = number[];
