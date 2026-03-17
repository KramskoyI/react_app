import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, Button, IconButton, Tooltip } from '@mui/material';

import { products, type Product } from '@entities/product/model';
import { DeleteProductModal } from '@features/delete-product';
import { WriteOffModal } from '@features/write-off-product';
import { CustomTable, Position, TitlePage, type Column } from '@shared/ui';

export const WarehousePage = () => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isWriteOffModalOpen, setWriteOffModalOpen] = useState(false);

  const columns: Column<Product>[] = [
    {
      key: 'name',
      title: 'Наименование',
    },
    {
      key: 'sum',
      title: 'Количество',
      align: Position.Center,
    },
    {
      title: '',
      render: () => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Удалить товар со склада">
            <IconButton onClick={() => setDeleteModalOpen(true)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Произвести списание">
            <IconButton onClick={() => setWriteOffModalOpen(true)}>
              <CreditCardOffOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
      width: '50px',
    },
  ];

  return (
    <div>
      <TitlePage text="Склад" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<AddIcon />}
          sx={{
            m: '1rem 0',
            px: 2,
            py: 1.25,
            color: 'text.primary',
            justifyContent: 'center',
            textTransform: 'none',
            borderColor: 'text.primary',
          }}>
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
