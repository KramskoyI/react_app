import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import { Box, Chip, IconButton, Tooltip, Typography } from '@mui/material';

import {
  type Order,
  OrderStatus,
  orderStatusLabel,
} from '@entities/order';

import { formatDate } from '@shared/lib/date/formatDate';
import { type Column, Position } from '@shared/ui';

import { orderActionsStyles, orderNumberTextStyles } from './styles';
import type { OrderActionHandlers } from './types';

const getStatusChipColor = (
  status: OrderStatus
): 'default' | 'primary' | 'success' | 'error' | 'warning' => {
  switch (status) {
    case OrderStatus.New:
      return 'primary';
    case OrderStatus.Processing:
      return 'warning';
    case OrderStatus.Completed:
      return 'success';
    case OrderStatus.Cancelled:
      return 'error';
    default:
      return 'default';
  }
};

export const getOrdersColumns = ({
  onDeleteClick,
  onEditClick,
  onStatusChangeClick,
}: OrderActionHandlers): Column<Order>[] => [
  {
    title: 'Номер заказа',
    render: (order) => (
      <Typography variant="body2" sx={orderNumberTextStyles}>
        {order.number}
      </Typography>
    ),
  },
  {
    title: 'Дата создания',
    align: Position.Center,
    render: (order) => formatDate(order.createdAt),
  },
  {
    title: 'Статус',
    align: Position.Center,
    render: (order) => (
      <Chip
        label={orderStatusLabel[order.status]}
        color={getStatusChipColor(order.status)}
        size="small"
      />
    ),
  },
  {
    title: '',
    width: '140px',
    render: (order) => (
      <Box sx={orderActionsStyles}>
        <Tooltip title="Удалить заказ">
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              onDeleteClick(order);
            }}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Редактировать заказ">
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              onEditClick(order);
            }}>
            <EditOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Изменить статус заказа">
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              onStatusChangeClick(order);
            }}>
            <SyncAltOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  },
];
