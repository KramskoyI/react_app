import type { SxProps, Theme } from '@mui/material';

import { uiColors } from '@shared/config/ui';
import { dialogTitleTextStyles } from '@shared/lib/styles/common';

const inputBaseStyles: SxProps<Theme> = {
  '& .MuiInputBase-input': {
    color: 'text.secondary',
    '&:focus': {
      color: 'text.secondary',
    },
    '&:hover': {
      color: 'text.secondary',
    },
  },
  '& .MuiOutlinedInput-root': {
    color: 'text.primary',
    '& fieldset': {
      borderColor: uiColors.inputBorder,
    },
    '&:hover fieldset': {
      borderColor: 'text.secondary',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'text.secondary',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'text.secondary',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'text.secondary',
  },
};

export const dialogTitleStyles: SxProps<Theme> = dialogTitleTextStyles;

export const restockCountFieldStyles: SxProps<Theme> = {
  mx: 2,
  my: 1,
  width: '90%',
  ...inputBaseStyles,
};
