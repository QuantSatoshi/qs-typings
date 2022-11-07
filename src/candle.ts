export interface CandlePriceSchema {
  date: Date;
  last: number; // price is last
  max: number;
  min: number;
}

export interface BaseCandleSchema extends CandlePriceSchema {
  sell_volume: number;
  buy_volume: number;
  first: number;
}

export interface CandleDbSchema extends BaseCandleSchema {
  _id?: any;
  len: number;
  avg: number;
  sell_times: number;
  buy_times: number;
  buy_cost: number;
  sell_cost: number;
  code?: string;
}

export interface CandleVolDbSchema extends BaseCandleSchema {
  volume: number;
}

export interface AggregateCandleDbSchema extends BaseCandleSchema {
  buy_cost: number;
  sell_cost: number;
  times: number;
  details: { [key: string]: number[] }; // [buy_volume, sell_volume]
}
