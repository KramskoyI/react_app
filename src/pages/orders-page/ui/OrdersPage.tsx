import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material';

import { type Order, orders } from '@entities/order';

import { CustomTable, TitlePage } from '@shared/ui';

import { ordersPageText } from './content';
import { getOrdersColumns } from './getOrdersColumns';
import { renderOrderDetails } from './renderOrderDetails';
import { createOrderButtonStyles, ordersActionsStyles } from './styles';

export const OrdersPage = () => {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const handleCreateOrder = () => {};

  const handleDeleteOrder: (order: Order) => void = () => {};

  const handleEditOrder: (order: Order) => void = () => {};

  const handleStatusChange: (order: Order) => void = () => {};

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
      <TitlePage text={ordersPageText.title} />
      <Box sx={ordersActionsStyles}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<AddIcon />}
          sx={createOrderButtonStyles}
          onClick={handleCreateOrder}>
          {ordersPageText.createButton}
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
