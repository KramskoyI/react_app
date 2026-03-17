import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';

import type { Product } from '@entities/product/model';

import { formatDate } from '@shared/lib/date/formatDate';
import { formatCurrency } from '@shared/lib/number/formatCurrency';
import { type Column, Position } from '@shared/ui';

import { warehouseActionsStyles, warehouseNameTextStyles } from './styles';

type GetWarehouseColumnsParams = {
  onDeleteClick: (product: Product) => void;
};

export const getWarehouseColumns = ({
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
    width: '48px',
    render: (product) => (
      <Box sx={warehouseActionsStyles}>
        <Tooltip title="Удалить товар со склада">
          <IconButton onClick={() => onDeleteClick(product)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  },
];
