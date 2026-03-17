import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material';

import { type Order, orders } from '@entities/order/model';

import { CustomTable, TitlePage } from '@shared/ui';

import { getOrdersColumns } from '../model/getOrdersColumns';
import { renderOrderDetails } from '../model/renderOrderDetails';
import { createOrderButtonStyles, ordersActionsStyles } from './styles';

export const OrdersPage = () => {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const handleCreateOrder = () => {};

  const handleDeleteOrder = (_order: Order) => {};

  const handleEditOrder = (_order: Order) => {};

  const handleStatusChange = (_order: Order) => {};

  const columns = getOrdersColumns({
    onDeleteClick: handleDeleteOrder,
    onEditClick: handleEditOrder,
    onStatusChangeClick: handleStatusChange,
  });

  const handleOrderRowClick = (order: Order) => {
    setExpandedOrderId((current) => (current === order.id ? null : order.id));
  };

  return (
    <div>
      <TitlePage text="Заказы" />
      <Box sx={ordersActionsStyles}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<AddIcon />}
          sx={createOrderButtonStyles}
          onClick={handleCreateOrder}>
          Создать заказ
        </Button>
      </Box>
      <CustomTable
        columns={columns}
        data={orders}
        expandedRowConfig={{
          expandedRowKey: expandedOrderId,
          getRowKey: (order) => order.id,
          onRowClick: handleOrderRowClick,
          renderExpandedRow: renderOrderDetails,
        }}
      />
    </div>
  );
};
