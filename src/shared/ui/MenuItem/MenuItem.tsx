import { NavLink } from 'react-router-dom';

import { Link } from '@mui/material';

import type { MenuItemProps } from './types';

export const MenuItem = ({ text, url, active }: MenuItemProps) => {
  return (
    <Link
      component={NavLink}
      to={url}
      underline="none"
      sx={{
        px: 2,
        py: 1,
        borderRadius: 1,
        fontSize: '0.95rem',
        fontWeight: active ? 600 : 400,
        color: active ? 'text.primary' : 'text.secondary',
        transition: 'background-color 0.15s ease, color 0.15s ease',
        '&:hover': {
          color: 'text.primary',
        },
      }}>
      {text}
    </Link>
  );
};
