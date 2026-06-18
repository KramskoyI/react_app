import type { SxProps, Theme } from '@mui/material';

import {
  dialogTitleWithPaddingStyles,
  modalFieldStyles,
  modalFieldsContainerStyles,
} from '@shared/lib/styles/forms';

export const dialogTitleStyles: SxProps<Theme> = dialogTitleWithPaddingStyles;

export const productFieldsContainerStyles: SxProps<Theme> =
  modalFieldsContainerStyles;

export const productFieldStyles: SxProps<Theme> = modalFieldStyles;

export const skuErrorFieldStyles: SxProps<Theme> = {
  ...modalFieldStyles,
  '& .MuiInputBase-input': {
    color: 'error.main',
  },
};
