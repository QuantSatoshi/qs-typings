import { SignalBuySell } from './trade';
export declare enum OpCode {
    cancelAllOrders = 0,
    cancelOrder = 1,
    createLimitOrder = 2,
    updateOrder = 3,
    createStopLimitOrder = 4,
    createMarketOrder = 5,
    limitClosePosition = 6,
    marketClosePosition = 7,
    createLimitOrderBatch = 8,
    updateOrdersBatch = 9
}
export declare namespace InstFuture {
    interface SharedProps {
        secondExchange?: boolean;
        ts?: number;
        isSerial?: boolean;
        pairDb?: string;
    }
    interface CancelAllOrders extends SharedProps {
        op: OpCode.cancelAllOrders;
        side?: SignalBuySell;
    }
    interface CancelOrder extends SharedProps {
        op: OpCode.cancelOrder;
        orderId: string | number;
    }
    interface CreateLimitOrder extends SharedProps {
        op: OpCode.createLimitOrder;
        side: SignalBuySell;
        price: number;
        amountAsset: number;
        icebergAmountAsset?: number;
        postOnly?: boolean;
        isClose?: boolean;
        customOrderId?: string;
        ioc?: boolean;
        goodTillDate?: number;
    }
    interface CreateLimitOrderBatch extends SharedProps {
        op: OpCode.createLimitOrderBatch;
        orders: CreateLimitOrder[];
    }
    interface UpdateOrder extends SharedProps {
        op: OpCode.updateOrder;
        orderId: string | number;
        price: number;
        side: SignalBuySell;
        amountAsset: number;
        icebergAmountAsset?: number;
        postOnly?: boolean;
        isClose?: boolean;
        customOrderId?: string;
        goodTillDate?: number;
    }
    interface UpdateOrdersBatch extends SharedProps {
        op: OpCode.updateOrdersBatch;
        orders: UpdateOrder[];
    }
    interface CreateStopLimitOrder extends SharedProps {
        op: OpCode.createStopLimitOrder;
        side: SignalBuySell;
        stopPrice: number;
        amountAsset: number;
    }
    interface CreateMarketOrder extends SharedProps {
        op: OpCode.createMarketOrder;
        side: SignalBuySell;
        amountAsset: number;
        price?: number;
        isClose?: boolean;
    }
    interface LimitClosePosition extends SharedProps {
        op: OpCode.limitClosePosition;
        price: number;
        postOnly?: boolean;
    }
    interface MarketClosePosition extends SharedProps {
        op: OpCode.marketClosePosition;
    }
    type Instruction = CancelAllOrders | CancelOrder | CreateLimitOrder | CreateLimitOrderBatch | UpdateOrder | UpdateOrdersBatch | CreateStopLimitOrder | CreateMarketOrder | LimitClosePosition | MarketClosePosition;
}
export declare namespace InstSpot {
    interface SharedProps {
        ts?: number;
        isSerial?: boolean;
        pairDb: string;
        isSpot: true;
    }
    interface CancelAllOrders extends SharedProps {
        op: OpCode.cancelAllOrders;
        side?: SignalBuySell;
    }
    interface CancelOrder extends SharedProps {
        op: OpCode.cancelOrder;
        orderId: string | number;
    }
    interface CreateLimitOrder extends SharedProps {
        op: OpCode.createLimitOrder;
        side: SignalBuySell;
        price: number;
        amountAsset: number;
        icebergAmountAsset?: number;
        postOnly?: boolean;
        customOrderId?: string;
    }
    interface CreateLimitOrderBatch extends SharedProps {
        op: OpCode.createLimitOrderBatch;
        orders: CreateLimitOrder[];
    }
    interface UpdateOrder extends SharedProps {
        op: OpCode.updateOrder;
        orderId: string | number;
        price: number;
        side: SignalBuySell;
        amountAsset: number;
        icebergAmountAsset?: number;
        postOnly?: boolean;
        customOrderId?: string;
    }
    interface UpdateOrdersBatch extends SharedProps {
        op: OpCode.updateOrdersBatch;
        orders: UpdateOrder[];
    }
    interface CreateStopLimitOrder extends SharedProps {
        op: OpCode.createStopLimitOrder;
        side: SignalBuySell;
        stopPrice: number;
        amountAsset: number;
    }
    interface CreateMarketOrder extends SharedProps {
        op: OpCode.createMarketOrder;
        side: SignalBuySell;
        amountCurrency?: number;
        amountAsset?: number;
        price?: number;
    }
    type Instruction = CancelAllOrders | CancelOrder | CreateLimitOrder | CreateLimitOrderBatch | UpdateOrder | UpdateOrdersBatch | CreateStopLimitOrder | CreateMarketOrder;
}
export interface PositionQS {
    amount: number;
    side: SignalBuySell;
    price: number;
    pairDb: string;
    exchange?: string;
    liquidationPrice?: number;
    maintMargin?: number;
    raw?: any;
    subPositions?: PositionQS[];
}
export interface OrderResponseQS {
    side: SignalBuySell;
    amountFilled: number;
    amount: number;
    icebergAmount?: number;
    price: number;
    pairDb: string;
    exchange?: string;
    orderId: string | number;
    isClose?: boolean;
    isActive?: boolean;
    ts?: number;
    customOrderId?: string;
}
export interface HistoryOrderResponseQs {
    side: SignalBuySell;
    price: number;
    amount: number;
    amountFilled: number;
    icebergAmount?: number;
    pairDb: string;
    orderId: string | number;
    execId: string | number;
    customOrderId?: string;
    isClose?: boolean;
    fee?: number;
    isMaker?: boolean;
    isLiquidation?: boolean;
    customOrderIdRaw?: number | string;
    ts?: number;
    tsUpdated?: number;
    pnl: number;
}
