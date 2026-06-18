import type { FC } from 'react';

import { Paper, Stack, Typography } from '@mui/material';

import { possibilityCardStyles, possibilityTitleStyles } from './styles';
import type { PossibilitiesProps } from './types';

export const Possibilities: FC<PossibilitiesProps> = ({
  textTitle,
  testDescription,
  icon,
}) => {
  return (
    <Paper elevation={0} sx={possibilityCardStyles}>
      <Stack spacing={1.5}>
        <Stack direction="row" spacing={1} alignItems="center">
          {icon}
          <Typography variant="subtitle1" sx={possibilityTitleStyles}>
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
