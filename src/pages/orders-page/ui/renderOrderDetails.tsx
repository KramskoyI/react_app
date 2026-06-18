import { Box, Stack, Typography } from '@mui/material';

import type { Order } from '@entities/order';

import { formatDate } from '@shared/lib/date/formatDate';

import { ordersPageText } from './content';
import {
  orderDetailsHeaderStyles,
  orderDetailsItemStyles,
  orderDetailsNameBlockStyles,
  orderDetailsNameTextStyles,
  orderDetailsQuantityStyles,
  orderDetailsTextWrapStyles,
} from './styles';

export const renderOrderDetails = (order: Order) => {
  return (
    <Stack spacing={1.5}>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
        <Typography variant="subtitle2" sx={orderDetailsHeaderStyles}>
          {ordersPageText.details.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ordersPageText.details.updatedAt}: {formatDate(order.updatedAt)}
        </Typography>
      </Stack>

      <Stack spacing={1}>
        {order.items.map((item) => (
          <Box
            key={`${order.id}-${item.productId}`}
            sx={orderDetailsItemStyles}>
            <Box sx={orderDetailsNameBlockStyles}>
              <Typography variant="body2" sx={orderDetailsNameTextStyles}>
                {item.name}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={orderDetailsTextWrapStyles}>
                {ordersPageText.details.productId}: {item.productId}
              </Typography>
            </Box>
            <Typography variant="body2" sx={orderDetailsQuantityStyles}>
              {item.quantity} {ordersPageText.details.quantityUnit}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
