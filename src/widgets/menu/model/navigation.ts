import { navigationText } from './content';

export type NavigationItem = {
  text: string;
  url: string;
};

export const navigationItems: NavigationItem[] = [
  { text: navigationText.home, url: '/' },
  { text: navigationText.warehouse, url: '/warehouse' },
  {
    text: navigationText.warehouseHistory,
    url: '/warehouse-history',
  },
  { text: navigationText.orders, url: '/orders' },
  { text: navigationText.ordersStats, url: '/orders-stats' },
];
