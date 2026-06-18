import type { SxProps, Theme } from '@mui/material';

import {
  dialogContentCompactStyles,
  dialogContentDescriptionTightStyles,
  dialogTitleStyles as sharedDialogTitleStyles,
  modalFieldWithHorizontalSpacingStyles,
} from '@shared/lib/styles/forms';

export const dialogTitleStyles: SxProps<Theme> = sharedDialogTitleStyles;

export const writeOffCountFieldStyles: SxProps<Theme> =
  modalFieldWithHorizontalSpacingStyles;

export const writeOffReasonFieldStyles: SxProps<Theme> =
  modalFieldWithHorizontalSpacingStyles;

export const writeOffMenuItemStyles: SxProps<Theme> = {
  color: 'text.secondary',
};

export const writeOffProductInfoContentStyles: SxProps<Theme> =
  dialogContentCompactStyles;

export const writeOffProductInfoTextStyles: SxProps<Theme> =
  dialogContentDescriptionTightStyles;
