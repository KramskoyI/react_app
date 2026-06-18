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

import { AddProductModal } from '@features/add-product';
import { DeleteProductModal } from '@features/delete-product';
import { RestockProductModal } from '@features/restock-product';

import {
  createProduct,
  deleteProduct,
  fetchProducts,
  restockProduct,
  type CreateProductPayload,
  type Product,
  type RestockProductPayload,
} from '@entities/product';

import { CustomTable, TitlePage } from '@shared/ui';

import { warehousePageText } from './content';
import { getWarehouseColumns } from './getWarehouseColumns';
import {
  addPositionButtonStyles,
  warehouseActionsStyles,
  warehouseAlertStyles,
  warehouseLoadingStateStyles,
} from './styles';

const PRODUCTS_QUERY_KEY = ['products'];

export const WarehousePage = () => {
  const queryClient = useQueryClient();
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isRestockModalOpen, setRestockModalOpen] = useState(false);
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

  const restockProductMutation = useMutation({
    mutationFn: restockProduct,
    onSuccess: async () => {
      await invalidateProducts();
      closeRestockModal();
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
    onRestockClick: (product) => {
      setSelectedProduct(product);
      setRestockModalOpen(true);
    },
    onDeleteClick: (product) => {
      setSelectedProduct(product);
      setDeleteModalOpen(true);
    },
  });

  const closeRestockModal = () => {
    setRestockModalOpen(false);
    setSelectedProduct(null);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCreateProduct = async (payload: CreateProductPayload) => {
    await createProductMutation.mutateAsync(payload);
  };

  const handleRestockProduct = async (payload: RestockProductPayload) => {
    await restockProductMutation.mutateAsync(payload);
  };

  const handleDeleteProduct = async (product: Product) => {
    await deleteProductMutation.mutateAsync(product.id);
  };

  return (
    <div>
      <TitlePage text={warehousePageText.title} />
      <Box sx={warehouseActionsStyles}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<AddIcon />}
          sx={addPositionButtonStyles}
          onClick={() => setAddModalOpen(true)}>
          {warehousePageText.addButton}
        </Button>
      </Box>

      {isLoading ? (
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={warehouseLoadingStateStyles}>
          <CircularProgress size={20} />
          <Typography color="text.secondary">{warehousePageText.loading}</Typography>
        </Stack>
      ) : null}

      {isError ? (
        <Alert severity="error" sx={warehouseAlertStyles}>
          {warehousePageText.loadError}
        </Alert>
      ) : null}

      {!isLoading && !isError && warehouseProducts.length === 0 ? (
        <Alert severity="info" sx={warehouseAlertStyles}>
          {warehousePageText.emptyState}
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
      <RestockProductModal
        open={isRestockModalOpen}
        product={selectedProduct}
        handleClose={closeRestockModal}
        handleAgree={handleRestockProduct}
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
