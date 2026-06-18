import type { SxProps, Theme } from '@mui/material';

export const possibilityCardStyles: SxProps<Theme> = {
  m: 2.5,
  p: 2.5,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
  boxSizing: 'border-box',
};

export const possibilityTitleStyles: SxProps<Theme> = {
  fontWeight: 600,
  color: 'text.secondary',
};
