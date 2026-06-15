import type { Product } from '@entities/product';

export type WriteOffModalProps = {
  open: boolean;
  product: Product | null;
  handleClose: () => void;
  handleAgree: (payload: WriteOffPayload) => Promise<void> | void;
};

export enum WriteOffReason {
  Defective = 'DEFECTIVE',
  Expired = 'EXPIRED',
  Damaged = 'DAMAGED',
}

export type WriteOffPayload = {
  product: Product;
  count: number;
  reason: WriteOffReason;
};
