export interface PoolFeeGrowth {
  periodStartUnix: number;
  liquidity: string;
  high: string;
  low: string;
  pool: PoolTvl;
  close: string;
  feeGrowthGlobal0X128: string;
  feeGrowthGlobal1X128: string;
}

export interface PoolTvl {
  totalValueLockedUSD: string;
  totalValueLockedToken1: string;
  totalValueLockedToken0: string;
}
