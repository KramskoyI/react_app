import type { CreateProductPayload } from '@entities/product';

export type AddProductModalProps = {
  open: boolean;
  existingSkus: string[];
  handleClose: () => void;
  handleAgree: (payload: CreateProductPayload) => Promise<void> | void;
};
