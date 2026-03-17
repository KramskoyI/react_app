import type { SxProps, Theme } from '@mui/material';

import { uiColors } from '@shared/config/ui';
import { dialogTitleTextStyles } from '@shared/lib/styles/common';

const inputBaseStyles: SxProps<Theme> = {
  '& .MuiInputBase-input': {
    color: 'text.secondary',
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

export const dialogTitleStyles: SxProps<Theme> = {
  ...dialogTitleTextStyles,
  px: 5,
  pb: 1,
};

export const productFieldsContainerStyles: SxProps<Theme> = {
  px: 2,
  pt: 2,
  pb: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

export const productFieldStyles: SxProps<Theme> = {
  ...inputBaseStyles,
};

export const skuErrorFieldStyles: SxProps<Theme> = {
  ...inputBaseStyles,
  '& .MuiInputBase-input': {
    color: 'error.main',
  },
};
