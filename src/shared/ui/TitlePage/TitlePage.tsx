import type { FC } from 'react';

import { Typography } from '@mui/material';

import type { TitlePageProps } from './types';

export const TitlePage: FC<TitlePageProps> = ({ text }) => {
  return (
    <Typography
      variant="h4"
      component="h1"
      fontWeight={600}
      color="text.primary">
      {text}
    </Typography>
  );
};
