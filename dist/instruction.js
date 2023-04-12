"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpCode = void 0;
var OpCode;
(function (OpCode) {
    OpCode[OpCode["cancelAllOrders"] = 0] = "cancelAllOrders";
    OpCode[OpCode["cancelOrder"] = 1] = "cancelOrder";
    OpCode[OpCode["createLimitOrder"] = 2] = "createLimitOrder";
    OpCode[OpCode["updateOrder"] = 3] = "updateOrder";
    OpCode[OpCode["createStopLimitOrder"] = 4] = "createStopLimitOrder";
    OpCode[OpCode["createMarketOrder"] = 5] = "createMarketOrder";
    OpCode[OpCode["limitClosePosition"] = 6] = "limitClosePosition";
    OpCode[OpCode["marketClosePosition"] = 7] = "marketClosePosition";
    OpCode[OpCode["createLimitOrderBatch"] = 8] = "createLimitOrderBatch";
})(OpCode = exports.OpCode || (exports.OpCode = {}));
