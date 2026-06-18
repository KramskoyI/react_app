import type { SxProps, Theme } from '@mui/material';

import {
  dialogContentDescriptionLooseStyles,
  dialogContentDescriptionTightStyles,
  dialogTitleStyles as sharedDialogTitleStyles,
} from '@shared/lib/styles/forms';

export const dialogTitleStyles: SxProps<Theme> = sharedDialogTitleStyles;

export const deleteProductInfoTextStyles: SxProps<Theme> =
  dialogContentDescriptionTightStyles;

export const deleteProductInfoTextLooseStyles: SxProps<Theme> =
  dialogContentDescriptionLooseStyles;
