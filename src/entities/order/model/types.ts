export enum OrderStatus {
  New = 'NEW',
  Processing = 'PROCESSING',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
}

export type OrderItem = {
  productId: string;
  name: string;
  quantity: number;
};

export type Order = {
  id: string;
  number: string;
  status: OrderStatus;
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
};
