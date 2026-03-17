import type { FC } from 'react';

import { Paper, Stack, Typography } from '@mui/material';

import type { PossibilitiesProps } from './types';

export const Possibilities: FC<PossibilitiesProps> = ({
  textTitle,
  testDescription,
  icon,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        m: 2.5,
        p: 2.5,
        borderRadius: 2,
        border: '1px solid #E5E7EB',
        backgroundColor: 'background.paper',
        boxSizing: 'border-box',
      }}>
      <Stack spacing={1.5}>
        <Stack direction="row" spacing={1} alignItems="center">
          {icon}
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color="text.secondary">
            {textTitle}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {testDescription}
        </Typography>
      </Stack>
    </Paper>
  );
};
