export const warehousePageText = {
  title: 'Склад',
  addButton: 'Добавить позицию',
  loading: 'Загрузка склада...',
  loadError:
    'Не удалось загрузить данные склада. Проверь, что `json-server` запущен командой `npm run start` или `npm run server`.',
  emptyState:
    'На складе пока нет позиций. Добавь первую запись через кнопку "Добавить позицию".',
  columns: {
    name: 'Наименование',
    sku: 'SKU',
    price: 'Цена',
    quantity: 'Остаток',
    updatedAt: 'Обновлено',
  },
  actions: {
    restock: 'Пополнить позицию',
    delete: 'Удалить товар со склада',
  },
} as const;
