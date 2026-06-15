export type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  unit: string;
  updatedAt: string;
};

export type CreateProductPayload = Omit<Product, 'id' | 'updatedAt'>;

export type RestockProductPayload = {
  product: Product;
  count: number;
};
