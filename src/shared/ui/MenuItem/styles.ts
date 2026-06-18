import type { SxProps, Theme } from '@mui/material';

import { themeLinkTransition } from '@app/styles/transitions';

export const getMenuItemLinkStyles = (active = false): SxProps<Theme> => ({
  px: 2,
  py: 1,
  borderRadius: 1,
  fontSize: '0.95rem',
  fontWeight: active ? 600 : 400,
  color: active ? 'text.primary' : 'text.secondary',
  transition: themeLinkTransition,
  '&:hover': {
    color: 'text.primary',
  },
  '&:focus-visible': {
    outline: '2px solid',
    outlineColor: 'primary.main',
    outlineOffset: 2,
  },
});
