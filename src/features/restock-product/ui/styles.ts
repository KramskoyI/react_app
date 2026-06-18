import type { SxProps, Theme } from '@mui/material';

import {
  dialogContentCompactStyles,
  dialogContentDescriptionTightStyles,
  dialogTitleStyles as sharedDialogTitleStyles,
  modalFieldWithHorizontalSpacingStyles,
} from '@shared/lib/styles/forms';

export const dialogTitleStyles: SxProps<Theme> = sharedDialogTitleStyles;

export const restockCountFieldStyles: SxProps<Theme> = {
  ...modalFieldWithHorizontalSpacingStyles,
};

export const restockProductInfoContentStyles: SxProps<Theme> =
  dialogContentCompactStyles;

export const restockProductInfoTextStyles: SxProps<Theme> =
  dialogContentDescriptionTightStyles;
