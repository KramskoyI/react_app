import type { PaletteMode, SxProps, Theme } from '@mui/material';

import {
  themeColorTransition,
  themeTransitionDurationMs,
  themeTransitionEasing,
  themeSurfaceTransition,
} from '@app/styles/transitions';

export const menuContainerStyles: SxProps<Theme> = {
  justifyContent: 'space-between',
  alignItems: 'center',
  px: 2,
  py: 1.5,
  gap: 2,
  flexWrap: 'wrap',
  borderRadius: 3,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'var(--app-menu-surface)',
  backdropFilter: 'blur(16px)',
  transition: themeSurfaceTransition,
};

export const menuNavigationStyles: SxProps<Theme> = {
  alignItems: 'center',
  flexWrap: 'wrap',
  rowGap: 1,
};

export const menuLogoStyles: SxProps<Theme> = {
  width: 80,
  height: 80,
};

export const menuThemeToggleButtonStyles: SxProps<Theme> = {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  width: 76,
  height: 40,
  px: 0.5,
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 999,
  backgroundColor: 'background.paper',
  cursor: 'pointer',
  transition: themeSurfaceTransition,
  boxShadow: 'var(--app-toggle-button-shadow)',
  '&:focus-visible': {
    outline: '2px solid',
    outlineColor: 'primary.main',
    outlineOffset: 2,
  },
};

export const getMenuThemeToggleThumbStyles = (
  mode: PaletteMode
): SxProps<Theme> => ({
  position: 'absolute',
  top: 4,
  left: mode === 'light' ? 4 : 38,
  width: 32,
  height: 32,
  borderRadius: '50%',
  background: 'var(--app-toggle-thumb-background)',
  boxShadow: 'var(--app-toggle-thumb-shadow)',
  transition: [
    `left ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
    `background ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
    `box-shadow ${themeTransitionDurationMs}ms ${themeTransitionEasing}`,
  ].join(', '),
});

export const menuThemeToggleIconSlotStyles: SxProps<Theme> = {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const getMenuThemeToggleIconStyles = (
  active: boolean
): SxProps<Theme> => ({
  fontSize: 18,
  color: active ? 'var(--app-toggle-active-icon-color)' : 'text.secondary',
  transition: themeColorTransition,
  transform: active ? 'scale(1.05)' : 'scale(1)',
  opacity: active ? 1 : 0.82,
});
