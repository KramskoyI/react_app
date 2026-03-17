import type { Product } from '@entities/product/model';

export type DeleteProductModalProps = {
  open: boolean;
  product: Product | null;
  handleClose: () => void;
  handleAgree: (product: Product) => Promise<void> | void;
};
