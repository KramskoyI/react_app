import { NavLink } from 'react-router-dom';

import { Link } from '@mui/material';

import { getMenuItemLinkStyles } from './styles';
import type { MenuItemProps } from './types';

export const MenuItem = ({ text, url, active }: MenuItemProps) => {
  return (
    <Link
      component={NavLink}
      to={url}
      underline="none"
      sx={getMenuItemLinkStyles(active)}>
      {text}
    </Link>
  );
};
