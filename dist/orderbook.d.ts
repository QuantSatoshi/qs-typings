export interface ObStreamShared {
    c: number;
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
export interface OrderBookSchema {
    ts: Date;
    pair: string;
    bids: OrderBookItem[];
    asks: OrderBookItem[];
}
export interface OrderBookDbSchema {
    _id?: any;
    ts: number;
    exchange?: string;
    c: number;
    bids: OrderBookItem[];
    asks: OrderBookItem[];
    v?: number;
    pairDb?: string;
}
export interface OrderBookItem {
    a: number;
    r: number;
}
export declare type OrderBookSchemaV2 = number[];
