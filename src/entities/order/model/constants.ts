import { OrderStatus } from './types';

export const orderStatusLabel: Record<OrderStatus, string> = {
  [OrderStatus.New]: 'Новый',
  [OrderStatus.Processing]: 'В обработке',
  [OrderStatus.Completed]: 'Завершён',
  [OrderStatus.Cancelled]: 'Отменён',
};
