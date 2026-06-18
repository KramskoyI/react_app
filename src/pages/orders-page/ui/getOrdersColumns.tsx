import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import { Box, Chip, IconButton, Tooltip, Typography } from '@mui/material';

import { type Order, OrderStatus, orderStatusLabel } from '@entities/order';

import { formatDate } from '@shared/lib/date/formatDate';
import { type Column, Position } from '@shared/ui';

import type { OrderActionHandlers } from '../model/types';
import { ordersPageText } from './content';
import { orderNumberTextStyles, orderRowActionsStyles } from './styles';

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
    title: ordersPageText.columns.number,
    render: (order) => (
      <Typography variant="body2" sx={orderNumberTextStyles}>
        {order.number}
      </Typography>
    ),
  },
  {
    title: ordersPageText.columns.createdAt,
    align: Position.Center,
    render: (order) => formatDate(order.createdAt),
  },
  {
    title: ordersPageText.columns.status,
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
      <Box sx={orderRowActionsStyles}>
        <Tooltip title={ordersPageText.actions.delete}>
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              onDeleteClick(order);
            }}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={ordersPageText.actions.edit}>
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              onEditClick(order);
            }}>
            <EditOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={ordersPageText.actions.changeStatus}>
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
