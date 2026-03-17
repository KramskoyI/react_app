import type { SxProps, Theme } from '@mui/material';

import {
  compactActionsRowStyles,
  readableTextStyles,
} from '@shared/lib/styles/common';

export const warehouseNameTextStyles: SxProps<Theme> = readableTextStyles;

export const warehouseActionsStyles: SxProps<Theme> = compactActionsRowStyles;
