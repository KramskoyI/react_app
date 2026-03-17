import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';

import type { Product } from '@entities/product/model';

import { formatDate } from '@shared/lib/date/formatDate';
import { type Column, Position } from '@shared/ui';

import { warehouseActionsStyles, warehouseNameTextStyles } from './styles';

type GetWarehouseColumnsParams = {
  onDeleteClick: () => void;
  onWriteOffClick: () => void;
};

export const getWarehouseColumns = ({
  onDeleteClick,
  onWriteOffClick,
}: GetWarehouseColumnsParams): Column<Product>[] => [
  {
    title: 'Наименование',
    render: (product) => (
      <Typography variant="body2" sx={warehouseNameTextStyles}>
        {product.name}
      </Typography>
    ),
  },
  {
    key: 'sku',
    title: 'SKU',
    align: Position.Center,
  },
  {
    title: 'Остаток',
    align: Position.Center,
    render: (product) => `${product.quantity} ${product.unit}`,
  },
  {
    title: 'Обновлено',
    align: Position.Center,
    render: (product) => formatDate(product.updatedAt),
  },
  {
    title: '',
    render: () => (
      <Box sx={warehouseActionsStyles}>
        <Tooltip title="Удалить товар со склада">
          <IconButton onClick={onDeleteClick}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Произвести списание">
          <IconButton onClick={onWriteOffClick}>
            <CreditCardOffOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    width: '72px',
  },
];
