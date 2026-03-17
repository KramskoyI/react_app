import type { SxProps, Theme } from '@mui/material';

import { uiColors, uiLayout } from '@shared/config/ui';

export const readableTextStyles: SxProps<Theme> = {
  color: uiColors.readableText,
  fontWeight: 600,
};

export const compactActionsRowStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
};

export const pageActionsContainerStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: uiLayout.pageActionsGap,
};

export const primaryOutlineActionButtonStyles: SxProps<Theme> = {
  m: '1rem 0',
  px: 2,
  py: 1.25,
  color: 'text.primary',
  justifyContent: 'center',
  textTransform: 'none',
  borderColor: 'text.primary',
};

export const dialogTitleTextStyles: SxProps<Theme> = {
  color: 'text.secondary',
};

export const textWrapStyles: SxProps<Theme> = {
  wordBreak: 'break-word',
  overflowWrap: 'anywhere',
};
