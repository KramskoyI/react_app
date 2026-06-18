export const ordersPageText = {
  title: 'Заказы',
  createButton: 'Создать заказ',
  columns: {
    number: 'Номер заказа',
    createdAt: 'Дата создания',
    status: 'Статус',
  },
  actions: {
    delete: 'Удалить заказ',
    edit: 'Редактировать заказ',
    changeStatus: 'Изменить статус заказа',
  },
  details: {
    title: 'Состав заказа',
    updatedAt: 'Обновлено',
    productId: 'ID товара',
    quantityUnit: 'шт',
  },
} as const;
