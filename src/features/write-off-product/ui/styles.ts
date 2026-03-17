import type { SxProps, Theme } from '@mui/material';

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
      borderColor: 'rgba(148, 163, 184, 0.6)',
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
  color: 'text.secondary',
};

export const writeOffCountFieldStyles: SxProps<Theme> = {
  mx: 2,
  width: '90%',
  ...inputBaseStyles,
};

export const writeOffReasonFieldStyles: SxProps<Theme> = {
  mx: 2,
  my: 2,
  width: '90%',
  ...inputBaseStyles,
};

export const writeOffMenuItemStyles: SxProps<Theme> = {
  color: 'text.secondary',
};
