import type { SxProps, Theme } from '@mui/material';

import { uiColors, uiLayout } from '@shared/config/ui';
import {
  compactActionsRowStyles,
  readableTextStyles,
  textWrapStyles,
} from '@shared/lib/styles/common';

export const orderNumberTextStyles: SxProps<Theme> = readableTextStyles;

export const orderActionsStyles: SxProps<Theme> = compactActionsRowStyles;

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
  color: uiColors.readableText,
  fontWeight: 500,
};
