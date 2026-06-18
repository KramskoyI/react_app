import { Stack, Typography } from '@mui/material';

import { TitlePage } from '@shared/ui';

import { warehouseStatsPageText } from './content';

export const WarehouseStatsPage = () => {
  return (
    <Stack spacing={3}>
      <TitlePage text={warehouseStatsPageText.title} />
      <Typography variant="body1" color="text.primary" maxWidth={720}>
        {warehouseStatsPageText.description}
      </Typography>
    </Stack>
  );
};
