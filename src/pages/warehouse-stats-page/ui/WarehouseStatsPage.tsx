import { Stack, Typography } from '@mui/material';

import { TitlePage } from '@shared/ui';

export const WarehouseStatsPage = () => {
  return (
    <Stack spacing={3}>
      <TitlePage text="Статистика по складу" />
      <Typography variant="body1" color="text.primary" maxWidth={720}>
        Раздел для аналитики по складу: остатки, движение товаров, оборачиваемость
        и проблемные позиции. Позже сюда можно добавить графики, сводные метрики
        и отчёты по периодам.
      </Typography>
    </Stack>
  );
};
