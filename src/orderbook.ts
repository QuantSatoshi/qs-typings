export interface ObStreamShared {
  c: number; // pair code
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

export interface OrderBookSchema {
  ts: Date;
  pair: string;
  bids: OrderBookItem[];
  asks: OrderBookItem[];
}

export interface OrderBookItem {
  a: number;
  r: number;
}
