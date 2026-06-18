import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import { Box } from '@mui/material';

import { useThemeMode } from '@app/providers';

import {
  getMenuThemeToggleIconStyles,
  getMenuThemeToggleThumbStyles,
  menuThemeToggleButtonStyles,
  menuThemeToggleIconSlotStyles,
} from './styles';

export const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Box
      component="button"
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      sx={menuThemeToggleButtonStyles}>
      <Box sx={getMenuThemeToggleThumbStyles(mode)} />
      <Box sx={menuThemeToggleIconSlotStyles}>
        <LightModeRoundedIcon sx={getMenuThemeToggleIconStyles(mode === 'light')} />
      </Box>
      <Box sx={menuThemeToggleIconSlotStyles}>
        <DarkModeRoundedIcon sx={getMenuThemeToggleIconStyles(mode === 'dark')} />
      </Box>
    </Box>
  );
};
