export interface RouteInfoBase {
    tokens: string[];
    pools: string[];
    routeFeeTypeArr: number[];
    v3FeeArr: number[];
}
export interface RouteInfoDb extends RouteInfoBase {
    hash: string;
}
export interface RouteInfo extends RouteInfoBase {
    amounts: string[];
    amountUSD?: number;
    sqrtPriceX96Limit: string[];
}
