import type { Product, RestockProductPayload } from '@entities/product';

export type RestockProductModalProps = {
  open: boolean;
  product: Product | null;
  handleClose: () => void;
  handleAgree: (payload: RestockProductPayload) => Promise<void> | void;
};
