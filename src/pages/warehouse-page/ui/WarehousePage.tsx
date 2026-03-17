import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  AddProductModal,
  type CreateProductPayload,
} from '@features/add-product';
import { DeleteProductModal } from '@features/delete-product';

import {
  createProduct,
  deleteProduct,
  fetchProducts,
} from '@entities/product/api/products';
import type { Product } from '@entities/product/model';

import { CustomTable, TitlePage } from '@shared/ui';

import { getWarehouseColumns } from '../model/getWarehouseColumns';
import { addPositionButtonStyles, warehouseActionsStyles } from './styles';

const PRODUCTS_QUERY_KEY = ['products'];

export const WarehousePage = () => {
  const queryClient = useQueryClient();
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const {
    data: warehouseProducts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: fetchProducts,
  });

  const invalidateProducts = async () => {
    await queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
  };

  const createProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: async () => {
      await invalidateProducts();
      setAddModalOpen(false);
    },
  });

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: async () => {
      await invalidateProducts();
      closeDeleteModal();
    },
  });

  const columns = getWarehouseColumns({
    onDeleteClick: (product) => {
      setSelectedProduct(product);
      setDeleteModalOpen(true);
    },
  });

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCreateProduct = async (payload: CreateProductPayload) => {
    await createProductMutation.mutateAsync(payload);
  };

  const handleDeleteProduct = async (product: Product) => {
    await deleteProductMutation.mutateAsync(product.id);
  };

  return (
    <div>
      <TitlePage text="Склад" />
      <Box sx={warehouseActionsStyles}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<AddIcon />}
          sx={addPositionButtonStyles}
          onClick={() => setAddModalOpen(true)}>
          Добавить позицию
        </Button>
      </Box>

      {isLoading ? (
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ py: 3 }}>
          <CircularProgress size={20} />
          <Typography color="text.secondary">Загрузка склада...</Typography>
        </Stack>
      ) : null}

      {isError ? (
        <Alert severity="error" sx={{ mt: 2 }}>
          Не удалось загрузить данные склада. Проверь, что `json-server` запущен
          командой `npm run start` или `npm run server`.
        </Alert>
      ) : null}

      {!isLoading && !isError && warehouseProducts.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          На складе пока нет позиций. Добавь первую запись через кнопку
          "Добавить позицию".
        </Alert>
      ) : null}

      {!isLoading && !isError && warehouseProducts.length > 0 ? (
        <CustomTable columns={columns} data={warehouseProducts} />
      ) : null}

      <AddProductModal
        open={isAddModalOpen}
        existingSkus={warehouseProducts.map((product) => product.sku)}
        handleClose={() => setAddModalOpen(false)}
        handleAgree={handleCreateProduct}
      />
      <DeleteProductModal
        open={isDeleteModalOpen}
        product={selectedProduct}
        handleClose={closeDeleteModal}
        handleAgree={handleDeleteProduct}
      />
    </div>
  );
};
