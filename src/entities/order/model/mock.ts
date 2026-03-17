import { type Order, OrderStatus } from './types';

export const orders: Order[] = [
  {
    id: 'ord-1001',
    number: 'ORD-1001',
    status: OrderStatus.New,
    createdAt: '2026-03-17T09:00:00.000Z',
    updatedAt: '2026-03-17T09:00:00.000Z',
    items: [
      { productId: 'prod-1', name: 'Кабель USB-C', quantity: 4 },
      { productId: 'prod-2', name: 'Блок питания 20W', quantity: 2 },
    ],
  },
  {
    id: 'ord-1002',
    number: 'ORD-1002',
    status: OrderStatus.Processing,
    createdAt: '2026-03-17T09:35:00.000Z',
    updatedAt: '2026-03-17T10:15:00.000Z',
    items: [{ productId: 'prod-3', name: 'Беспроводная мышь', quantity: 3 }],
  },
  {
    id: 'ord-1003',
    number: 'ORD-1003',
    status: OrderStatus.Completed,
    createdAt: '2026-03-16T15:10:00.000Z',
    updatedAt: '2026-03-16T18:45:00.000Z',
    items: [
      { productId: 'prod-4', name: 'Механическая клавиатура', quantity: 1 },
      { productId: 'prod-1', name: 'Кабель USB-C', quantity: 2 },
    ],
  },
  {
    id: 'ord-1004',
    number: 'ORD-1004',
    status: OrderStatus.Cancelled,
    createdAt: '2026-03-15T11:20:00.000Z',
    updatedAt: '2026-03-15T12:05:00.000Z',
    items: [{ productId: 'prod-5', name: 'Монитор 27 дюймов', quantity: 1 }],
  },
  {
    id: 'ord-1005',
    number: 'ORD-1005',
    status: OrderStatus.New,
    createdAt: '2026-03-17T10:50:00.000Z',
    updatedAt: '2026-03-17T10:50:00.000Z',
    items: [
      { productId: 'prod-6', name: 'Подставка для ноутбука', quantity: 5 },
      { productId: 'prod-1', name: 'Кабель USB-C', quantity: 10 },
    ],
  },
  {
    id: 'ord-1006',
    number: 'ORD-1006',
    status: OrderStatus.Processing,
    createdAt: '2026-03-14T13:40:00.000Z',
    updatedAt: '2026-03-16T09:20:00.000Z',
    items: [
      { productId: 'prod-2', name: 'Блок питания 20W', quantity: 4 },
      { productId: 'prod-3', name: 'Беспроводная мышь', quantity: 2 },
    ],
  },
];
