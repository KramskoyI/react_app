import type { SxProps, Theme } from '@mui/material';

import { readableTextStyles } from '@shared/lib/styles/common';

export const homeIntroSectionStyles: SxProps<Theme> = {
  mb: 4,
};

export const homeIntroTextStyles: SxProps<Theme> = {
  ...readableTextStyles,
  maxWidth: 700,
  fontWeight: 400,
};

export const homeCapabilitiesSectionStyles: SxProps<Theme> = {
  mb: 2,
};

export const homeCapabilitiesTitleStyles: SxProps<Theme> = readableTextStyles;

export const homeCapabilitiesDescriptionStyles: SxProps<Theme> = {
  ...readableTextStyles,
  fontWeight: 400,
};
