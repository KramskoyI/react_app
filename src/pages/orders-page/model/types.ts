import type { Order } from '@entities/order/model';

export type OrderActionHandlers = {
  onDeleteClick: (order: Order) => void;
  onEditClick: (order: Order) => void;
  onStatusChangeClick: (order: Order) => void;
};
