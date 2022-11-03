import { SignalBuySell } from './trade';
export declare enum OpCode {
    cancelAllOrders = 0,
    cancelOrder = 1,
    createLimitOrder = 2,
    updateOrder = 3,
    createStopLimitOrder = 4,
    createMarketOrder = 5,
    limitClosePosition = 6,
    marketClosePosition = 7
}
export declare namespace Inst {
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
        amountCurrency: number;
        postOnly?: boolean;
        isClose?: boolean;
    }
    interface UpdateOrder extends SharedProps {
        op: OpCode.updateOrder;
        orderId: string | number;
        price: number;
        side: SignalBuySell;
        amountCurrency: number;
        postOnly?: boolean;
        isClose?: boolean;
    }
    interface CreateStopLimitOrder extends SharedProps {
        op: OpCode.createStopLimitOrder;
        side: SignalBuySell;
        stopPrice: number;
        amountCurrency: number;
    }
    interface CreateMarketOrder extends SharedProps {
        op: OpCode.createMarketOrder;
        side: SignalBuySell;
        amountCurrency: number;
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
    type Instruction = CancelAllOrders | CancelOrder | CreateLimitOrder | UpdateOrder | CreateStopLimitOrder | CreateMarketOrder | LimitClosePosition | MarketClosePosition;
}
export declare namespace InstSpot {
    interface SharedProps {
        ts?: number;
        isSerial?: boolean;
        pairDb: string;
        secondExchange?: boolean;
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
        postOnly?: boolean;
    }
    interface UpdateOrder extends SharedProps {
        op: OpCode.updateOrder;
        orderId: string | number;
        price: number;
        side: SignalBuySell;
        amountAsset: number;
        postOnly?: boolean;
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
    type Instruction = CancelAllOrders | CancelOrder | CreateLimitOrder | UpdateOrder | CreateStopLimitOrder | CreateMarketOrder;
}
