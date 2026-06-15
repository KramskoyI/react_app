export {
  createProduct,
  deleteProduct,
  fetchProducts,
  restockProduct,
} from './api/products';
export { products } from './model/mock';
export type {
  CreateProductPayload,
  Product,
  RestockProductPayload,
} from './model/types';
