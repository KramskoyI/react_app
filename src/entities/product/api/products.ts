import { API_BASE_URL } from '@shared/config/api';

import type {
  CreateProductPayload,
  Product,
  RestockProductPayload,
} from '../model/types';

const PRODUCTS_URL = `${API_BASE_URL}/products`;

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error('Не удалось загрузить товары');
  }

  return response.json();
};

export const createProduct = async (
  payload: CreateProductPayload
): Promise<Product> => {
  const response = await fetch(PRODUCTS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: crypto.randomUUID(),
      ...payload,
      updatedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error('Не удалось создать товар');
  }

  return response.json();
};

export const deleteProduct = async (productId: string): Promise<void> => {
  const response = await fetch(`${PRODUCTS_URL}/${productId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Не удалось удалить товар');
  }
};

export const restockProduct = async ({
  product,
  count,
}: RestockProductPayload): Promise<Product> => {
  const response = await fetch(`${PRODUCTS_URL}/${product.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quantity: product.quantity + count,
      updatedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error('Не удалось пополнить товар');
  }

  return response.json();
};
