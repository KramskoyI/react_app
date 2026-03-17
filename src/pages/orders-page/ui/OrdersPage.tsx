import { Stack, Typography } from '@mui/material';

import { TitlePage } from '@shared/ui';

export const OrdersPage = () => {
  return (
    <Stack spacing={3}>
      <TitlePage text="Заказы" />
      <Typography variant="body1" color="text.primary" maxWidth={720}>
        Раздел для работы с заказами: создание, просмотр, контроль статусов и
        управление выполнением. Здесь позже можно разместить список заказов,
        фильтры и карточки деталей.
      </Typography>
    </Stack>
  );
};
