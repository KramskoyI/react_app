import type { SxProps, Theme } from '@mui/material';

import {
  pageActionsContainerStyles,
  primaryOutlineActionButtonStyles,
} from '@shared/lib/styles/common';

export const ordersActionsStyles: SxProps<Theme> = pageActionsContainerStyles;

export const createOrderButtonStyles: SxProps<Theme> =
  primaryOutlineActionButtonStyles;
