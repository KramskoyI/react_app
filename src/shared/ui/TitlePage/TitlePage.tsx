import type { FC } from 'react';

import { Typography } from '@mui/material';

type TTitle = {
  text: string;
};

export const TitlePage: FC<TTitle> = ({ text }) => {
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
