import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';

import type { Product } from '@entities/product';

import { formatDate } from '@shared/lib/date/formatDate';
import { formatCurrency } from '@shared/lib/number/formatCurrency';
import { type Column, Position } from '@shared/ui';

import { warehousePageText } from './content';
import { warehouseNameTextStyles, warehouseRowActionsStyles } from './styles';

type GetWarehouseColumnsParams = {
  onRestockClick: (product: Product) => void;
  onDeleteClick: (product: Product) => void;
};

export const getWarehouseColumns = ({
  onRestockClick,
  onDeleteClick,
}: GetWarehouseColumnsParams): Column<Product>[] => [
  {
    title: warehousePageText.columns.name,
    render: (product) => (
      <Typography variant="body2" sx={warehouseNameTextStyles}>
        {product.name}
      </Typography>
    ),
  },
  {
    key: 'sku',
    title: warehousePageText.columns.sku,
    align: Position.Center,
  },
  {
    title: warehousePageText.columns.price,
    align: Position.Center,
    render: (product) => formatCurrency(product.price),
  },
  {
    title: warehousePageText.columns.quantity,
    align: Position.Center,
    render: (product) => `${product.quantity} ${product.unit}`,
  },
  {
    title: warehousePageText.columns.updatedAt,
    align: Position.Center,
    render: (product) => formatDate(product.updatedAt),
  },
  {
    title: '',
    width: '88px',
    render: (product) => (
      <Box sx={warehouseRowActionsStyles}>
        <Tooltip title={warehousePageText.actions.restock}>
          <IconButton onClick={() => onRestockClick(product)}>
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={warehousePageText.actions.delete}>
          <IconButton onClick={() => onDeleteClick(product)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  },
];
