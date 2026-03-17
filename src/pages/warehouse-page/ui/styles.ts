import type { SxProps, Theme } from '@mui/material';

export const warehouseActionsStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
};

export const addPositionButtonStyles: SxProps<Theme> = {
  m: '1rem 0',
  px: 2,
  py: 1.25,
  color: 'text.primary',
  justifyContent: 'center',
  textTransform: 'none',
  borderColor: 'text.primary',
};
