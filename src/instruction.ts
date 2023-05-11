import { SignalBuySell } from './trade';

export enum OpCode {
  cancelAllOrders,
  cancelOrder,
  createLimitOrder,
  updateOrder,
  createStopLimitOrder,
  createMarketOrder,
  limitClosePosition,
  marketClosePosition,
  createLimitOrderBatch,
  updateOrdersBatch,
}

export namespace InstFuture {
  export interface SharedProps {
    secondExchange?: boolean;
    ts?: number;
    isSerial?: boolean; // if is seriel, need to wait for this instruction gets executed first.
    pairDb?: string;
  }

  export interface CancelAllOrders extends SharedProps {
    op: OpCode.cancelAllOrders;
    // optional cancel orders filtered by side
    side?: SignalBuySell;
  }
  export interface CancelOrder extends SharedProps {
    op: OpCode.cancelOrder;
    orderId: string | number;
  }

  export interface CreateLimitOrder extends SharedProps {
    op: OpCode.createLimitOrder;
    side: SignalBuySell;
    price: number;
    amountCurrency: number;
    postOnly?: boolean;
    isClose?: boolean;
    customOrderId?: string;
  }

  export interface CreateLimitOrderBatch extends SharedProps {
    op: OpCode.createLimitOrderBatch;
    orders: CreateLimitOrder[];
  }

  export interface UpdateOrder extends SharedProps {
    op: OpCode.updateOrder;
    orderId: string | number;
    price: number;
    side: SignalBuySell;
    amountCurrency: number;
    postOnly?: boolean;
    isClose?: boolean;
    customOrderId?: string;
  }

  export interface UpdateOrdersBatch extends SharedProps {
    op: OpCode.updateOrdersBatch;
    orders: UpdateOrder[];
  }

  export interface CreateStopLimitOrder extends SharedProps {
    op: OpCode.createStopLimitOrder;
    side: SignalBuySell;
    stopPrice: number;
    amountCurrency: number;
  }

  export interface CreateMarketOrder extends SharedProps {
    op: OpCode.createMarketOrder;
    side: SignalBuySell;
    amountCurrency: number;
    price?: number;
    isClose?: boolean;
  }

  export interface LimitClosePosition extends SharedProps {
    op: OpCode.limitClosePosition;
    price: number;
    postOnly?: boolean;
  }

  export interface MarketClosePosition extends SharedProps {
    op: OpCode.marketClosePosition;
  }

  export type Instruction =
    | CancelAllOrders
    | CancelOrder
    | CreateLimitOrder
    | CreateLimitOrderBatch
    | UpdateOrder
    | UpdateOrdersBatch
    | CreateStopLimitOrder
    | CreateMarketOrder
    | LimitClosePosition
    | MarketClosePosition;
}

export namespace InstSpot {
  export interface SharedProps {
    ts?: number;
    isSerial?: boolean;
    pairDb: string;
    isSpot: true;
  }

  export interface CancelAllOrders extends SharedProps {
    op: OpCode.cancelAllOrders;
    // optional cancel orders filtered by side
    side?: SignalBuySell;
  }
  export interface CancelOrder extends SharedProps {
    op: OpCode.cancelOrder;
    orderId: string | number;
  }

  export interface CreateLimitOrder extends SharedProps {
    op: OpCode.createLimitOrder;
    side: SignalBuySell;
    price: number;
    amountAsset: number;
    postOnly?: boolean;
    customOrderId?: string;
  }

  export interface CreateLimitOrderBatch extends SharedProps {
    op: OpCode.createLimitOrderBatch;
    orders: CreateLimitOrder[];
  }

  export interface UpdateOrder extends SharedProps {
    op: OpCode.updateOrder;
    orderId: string | number;
    price: number;
    side: SignalBuySell;
    amountAsset: number;
    postOnly?: boolean;
    customOrderId?: string;
  }

  export interface UpdateOrdersBatch extends SharedProps {
    op: OpCode.updateOrdersBatch;
    orders: UpdateOrder[];
  }

  export interface CreateStopLimitOrder extends SharedProps {
    op: OpCode.createStopLimitOrder;
    side: SignalBuySell;
    stopPrice: number;
    amountAsset: number;
  }

  export interface CreateMarketOrder extends SharedProps {
    op: OpCode.createMarketOrder;
    side: SignalBuySell;
    // use amountCurrency for buy order
    amountCurrency?: number;
    // use amountAsset for sell order
    amountAsset?: number;
    // override, backtest only
    price?: number;
  }

  export type Instruction =
    | CancelAllOrders
    | CancelOrder
    | CreateLimitOrder
    | CreateLimitOrderBatch
    | UpdateOrder
    | UpdateOrdersBatch
    | CreateStopLimitOrder
    | CreateMarketOrder;
}
