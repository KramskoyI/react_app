import type { SxProps, Theme } from '@mui/material';

export const dialogTitleStyles: SxProps<Theme> = {
  color: 'text.secondary',
};

export const dialogTitleWithPaddingStyles: SxProps<Theme> = {
  ...dialogTitleStyles,
  px: 5,
  pb: 1,
};

export const modalFieldsContainerStyles: SxProps<Theme> = {
  px: 2,
  pt: 2,
  pb: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

export const modalInputBaseStyles: SxProps<Theme> = {
  '& .MuiInputBase-input': {
    color: 'text.primary',
    '&:focus': {
      color: 'text.primary',
    },
    '&:hover': {
      color: 'text.primary',
    },
  },
  '& .MuiOutlinedInput-root': {
    color: 'text.primary',
    '& fieldset': {
      borderColor: 'divider',
    },
    '&:hover fieldset': {
      borderColor: 'primary.main',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'primary.main',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'text.secondary',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'text.secondary',
  },
};

export const modalFieldStyles: SxProps<Theme> = {
  ...modalInputBaseStyles,
};

export const modalFieldWithHorizontalSpacingStyles: SxProps<Theme> = {
  mx: 2,
  my: 1,
  width: '90%',
  ...modalInputBaseStyles,
};

export const dialogContentCompactStyles: SxProps<Theme> = {
  pb: 1,
};

export const dialogContentDescriptionStyles: SxProps<Theme> = {
  color: 'text.secondary',
};

export const dialogContentDescriptionTightStyles: SxProps<Theme> = {
  ...dialogContentDescriptionStyles,
  mb: 1,
};

export const dialogContentDescriptionLooseStyles: SxProps<Theme> = {
  ...dialogContentDescriptionStyles,
  mb: 2,
};
