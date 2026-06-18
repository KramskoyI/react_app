import type { SxProps, Theme } from '@mui/material';

import { uiLayout } from '@shared/config/ui';
import {
  compactActionsRowStyles,
  pageActionsContainerStyles,
  primaryOutlineActionButtonStyles,
  readableTextStyles,
  textWrapStyles,
} from '@shared/lib/styles/common';

export const ordersActionsStyles: SxProps<Theme> = pageActionsContainerStyles;

export const createOrderButtonStyles: SxProps<Theme> =
  primaryOutlineActionButtonStyles;

export const orderNumberTextStyles: SxProps<Theme> = readableTextStyles;

export const orderRowActionsStyles: SxProps<Theme> = compactActionsRowStyles;

export const orderDetailsHeaderStyles: SxProps<Theme> = readableTextStyles;

export const orderDetailsItemStyles: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: `${uiLayout.orderDetailsNameWidth}px ${uiLayout.orderDetailsQuantityWidth}px`,
  alignItems: 'start',
  columnGap: 2,
  py: 0.75,
};

export const orderDetailsNameBlockStyles: SxProps<Theme> = {
  width: `${uiLayout.orderDetailsNameWidth}px`,
};

export const orderDetailsTextWrapStyles: SxProps<Theme> = textWrapStyles;

export const orderDetailsNameTextStyles: SxProps<Theme> = readableTextStyles;

export const orderDetailsQuantityStyles: SxProps<Theme> = {
  width: `${uiLayout.orderDetailsQuantityWidth}px`,
  textAlign: 'right',
  whiteSpace: 'nowrap',
  color: 'text.primary',
  fontWeight: 500,
};
