import { useLocation } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { MenuItem } from '@shared/ui';

import logo from '@assets/logo.svg';

import { navigationItems } from '../model/navigation';
import {
  menuContainerStyles,
  menuLogoStyles,
  menuNavigationStyles,
} from './styles';
import { ThemeToggle } from './ThemeToggle';

export const Menu = () => {
  const { pathname } = useLocation();

  return (
    <Stack spacing={2} direction="row" sx={menuContainerStyles}>
      <Stack spacing={2} direction="row" sx={menuNavigationStyles}>
        <Box component="img" src={logo} alt="Logo" sx={menuLogoStyles} />

        {navigationItems.map(({ text, url }) => (
          <MenuItem key={url} text={text} url={url} active={pathname === url} />
        ))}
      </Stack>

      <ThemeToggle />
    </Stack>
  );
};
