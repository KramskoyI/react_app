import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, IconButton, Tooltip } from '@mui/material';

import type { Product } from '@entities/product/model';

import { type Column, Position } from '@shared/ui';

type GetWarehouseColumnsParams = {
  onDeleteClick: () => void;
  onWriteOffClick: () => void;
};

export const getWarehouseColumns = ({
  onDeleteClick,
  onWriteOffClick,
}: GetWarehouseColumnsParams): Column<Product>[] => [
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
    width: '50px',
  },
];
