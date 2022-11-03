// const [ ts, s, r ,a , c ] = doc;
export type TradeDbSchemaV2 = number[];
export type SignalBuySell = 'buy' | 'sell';

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
  c?: string; // doesn't save in db
  t: Date; // transaction time
  ts: Date; // server time when data is recorded
  tId: number | string;
  tIds?: (string | number)[];
  tIdO?: number | string;
  liq?: any; // liquidation
  v?: number; // data version
  qA?: number; //bitmex foreignNotional
  gV?: number; // bitmex grossValue
  code?: string;
}
