export interface ObStreamShared {
  c: number; // pair code
  pair?: string; // override
  b?: number[][]; // price, amount, sorted from best to worst
  a?: number[][]; // price, amount, sorted from best to worst
  ts: number; // timestamp in ms
  e: 's' | 'u'; // snapshot, update
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
  pair: string; // for raw orderbook schema data fetching
}

export interface OrderBookSchema extends OrderBookBase {
  _id?: any;
  ts: number; // server timestamp
  exchange?: string; // do not save to db
  c: number; // product / pairDb & exchange code
  bids: OrderBookItem[];
  asks: OrderBookItem[];
  v?: number;
  pairDb?: string;
}

export interface OrderBookItem {
  a: number;
  r: number;
}

export type OrderBookSchemaV2 = number[];
