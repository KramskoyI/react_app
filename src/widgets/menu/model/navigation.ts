export type NavigationItem = {
  text: string;
  url: string;
};

export const navigationItems: NavigationItem[] = [
  { text: 'Главная', url: '/' },
  { text: 'Склад', url: '/warehouse' },
  { text: 'Заказы', url: '/orders' },
  { text: 'Статистика склада', url: '/warehouse-stats' },
  { text: 'Статистика заказов', url: '/orders-stats' },
];
