import { Stack, Typography } from '@mui/material';

import { TitlePage } from '@shared/ui';

import { ordersStatsPageText } from './content';

export const OrdersStatsPage = () => {
  return (
    <Stack spacing={3}>
      <TitlePage text={ordersStatsPageText.title} />
      <Typography variant="body1" color="text.primary" maxWidth={720}>
        {ordersStatsPageText.description}
      </Typography>
    </Stack>
  );
};
