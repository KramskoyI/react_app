import type { SxProps, Theme } from '@mui/material';

import {
  compactActionsRowStyles,
  pageActionsContainerStyles,
  primaryOutlineActionButtonStyles,
  readableTextStyles,
} from '@shared/lib/styles/common';

export const warehouseActionsStyles: SxProps<Theme> =
  pageActionsContainerStyles;

export const addPositionButtonStyles: SxProps<Theme> =
  primaryOutlineActionButtonStyles;

export const warehouseNameTextStyles: SxProps<Theme> = readableTextStyles;

export const warehouseRowActionsStyles: SxProps<Theme> = compactActionsRowStyles;

export const warehouseLoadingStateStyles: SxProps<Theme> = {
  py: 3,
};

export const warehouseAlertStyles: SxProps<Theme> = {
  mt: 2,
};
