import { Stack, Typography } from '@mui/material';

import { TitlePage } from '@shared/ui';

export const WarehouseStatsPage = () => {
  return (
    <Stack spacing={3}>
      <TitlePage text="История изменений на складе" />
      <Typography variant="body1" color="text.primary" maxWidth={720}>
        Раздел для просмотра истории движения товаров на складе: поступления,
        удаления, изменения остатков и другие складские события. Позже сюда
        можно добавить временные графики, фильтры по периодам и журнал
        операций.
      </Typography>
    </Stack>
  );
};
