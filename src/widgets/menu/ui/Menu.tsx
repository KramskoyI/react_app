import { useLocation } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import logo from '@assets/logo.svg';
import { MenuItem } from '@shared/ui';

export const Menu = () => {
  const { pathname } = useLocation();
  const isWarehousePage = pathname === '/warehouse';
  const isOrdersPage = pathname === '/orders';
  const isWarehouseStatsPage = pathname === '/warehouse-stats';
  const isOrdersStatsPage = pathname === '/orders-stats';

  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        px: 2,
        flexWrap: 'wrap',
      }}>
      <Box
        component="img"
        src={logo}
        alt="Логотип"
        sx={{ width: 80, height: 80 }}
      />

      <MenuItem text="Главная" url="/" active={pathname === '/'} />
      <MenuItem text="Склад" url="/warehouse" active={isWarehousePage} />
      <MenuItem text="Заказы" url="/orders" active={isOrdersPage} />
      <MenuItem
        text="Статистика склада"
        url="/warehouse-stats"
        active={isWarehouseStatsPage}
      />
      <MenuItem
        text="Статистика заказов"
        url="/orders-stats"
        active={isOrdersStatsPage}
      />
    </Stack>
  );
};
