import { Stack, Typography } from '@mui/material';

import { TitlePage } from '@shared/ui';

export const OrdersStatsPage = () => {
  return (
    <Stack spacing={3}>
      <TitlePage text="Статистика по заказам" />
      <Typography variant="body1" color="text.primary" maxWidth={720}>
        Раздел для аналитики по заказам: количество, статусы, скорость обработки
        и динамика отгрузок. Позже здесь можно показать воронку, KPI и сводку по
        эффективности работы с заказами.
      </Typography>
    </Stack>
  );
};
