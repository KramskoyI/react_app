import { useLocation } from 'react-router-dom';

import logo from '@assets/logo.svg';
import { Box, Stack } from '@mui/material';

import { MenuItem } from '../../shared/ui';

export const Menu = () => {
  const { pathname } = useLocation();

  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        px: 2,
      }}>
      <Box
        component="img"
        src={logo}
        alt="Логотип"
        sx={{ width: 80, height: 80 }}
      />

      <MenuItem text="Главная" url="/" active={pathname === '/'} />
      <MenuItem
        text="Склад"
        url="/warehouse"
        active={pathname.startsWith('/warehouse')}
      />
    </Stack>
  );
};
