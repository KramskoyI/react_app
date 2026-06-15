import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';

import type { Product } from '@entities/product';

import { formatDate } from '@shared/lib/date/formatDate';
import { formatCurrency } from '@shared/lib/number/formatCurrency';
import { type Column, Position } from '@shared/ui';

import { warehouseActionsStyles, warehouseNameTextStyles } from './styles';

type GetWarehouseColumnsParams = {
  onRestockClick: (product: Product) => void;
  onDeleteClick: (product: Product) => void;
};

export const getWarehouseColumns = ({
  onRestockClick,
  onDeleteClick,
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
    title: 'Цена',
    align: Position.Center,
    render: (product) => formatCurrency(product.price),
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
    width: '88px',
    render: (product) => (
      <Box sx={warehouseActionsStyles}>
        <Tooltip title="Пополнить позицию">
          <IconButton onClick={() => onRestockClick(product)}>
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Удалить товар со склада">
          <IconButton onClick={() => onDeleteClick(product)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  },
];
