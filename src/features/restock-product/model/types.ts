import type { Product } from '@entities/product/model';

export type RestockProductPayload = {
  product: Product;
  count: number;
};

export type RestockProductModalProps = {
  open: boolean;
  product: Product | null;
  handleClose: () => void;
  handleAgree: (payload: RestockProductPayload) => Promise<void> | void;
};
