export interface AddressDoc {
  addr: string;
  value: number;
}

export interface OnChainTxDbSchema {
  _id?: any;
  txHash: string;
  t: Date;
  txIndex: number;
  height: number;
  estimateVol: number;
  inputs: AddressDoc[];
  outputs: AddressDoc[];
}
