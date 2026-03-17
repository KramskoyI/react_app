import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material';

import { DeleteProductModal } from '@features/delete-product';
import { WriteOffModal } from '@features/write-off-product';

import { products } from '@entities/product/model';

import { CustomTable, TitlePage } from '@shared/ui';

import { getWarehouseColumns } from '../model/getWarehouseColumns';
import { addPositionButtonStyles, warehouseActionsStyles } from './styles';

export const WarehousePage = () => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isWriteOffModalOpen, setWriteOffModalOpen] = useState(false);

  const columns = getWarehouseColumns({
    onDeleteClick: () => setDeleteModalOpen(true),
    onWriteOffClick: () => setWriteOffModalOpen(true),
  });

  return (
    <div>
      <TitlePage text="Склад" />
      <Box sx={warehouseActionsStyles}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<AddIcon />}
          sx={addPositionButtonStyles}>
          Добавить позицию
        </Button>
      </Box>
      <CustomTable columns={columns} data={products} />
      <DeleteProductModal
        open={isDeleteModalOpen}
        handleClose={() => setDeleteModalOpen(false)}
        handleAgree={() => setDeleteModalOpen(false)}
      />
      <WriteOffModal
        open={isWriteOffModalOpen}
        handleClose={() => setWriteOffModalOpen(false)}
        handleAgree={() => setWriteOffModalOpen(false)}
      />
    </div>
  );
};
