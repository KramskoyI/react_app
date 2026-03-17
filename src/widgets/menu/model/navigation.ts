export type NavigationItem = {
  text: string;
  url: string;
};

export const navigationItems: NavigationItem[] = [
  { text: 'Главная', url: '/' },
  { text: 'Склад', url: '/warehouse' },
  {
    text: 'История изменений на складе',
    url: '/warehouse-history',
  },
  { text: 'Заказы', url: '/orders' },
  { text: 'Статистика заказов', url: '/orders-stats' },
];
