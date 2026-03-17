import type { Product } from '@entities/product/model';

export type CreateProductPayload = Omit<Product, 'id' | 'updatedAt'>;

export type AddProductModalProps = {
  open: boolean;
  existingSkus: string[];
  handleClose: () => void;
  handleAgree: (payload: CreateProductPayload) => Promise<void> | void;
};
