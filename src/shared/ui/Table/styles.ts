import type { SxProps, Theme } from '@mui/material';

export const tableContainerStyles: SxProps<Theme> = {
  my: '1rem',
};

export const tableRootStyles: SxProps<Theme> = {
  minWidth: 500,
};

export const tableHeadCellStyles: SxProps<Theme> = {
  color: 'text.primary',
};

export const clickableTableRowStyles: SxProps<Theme> = {
  cursor: 'pointer',
};

export const expandedRowCellStyles: SxProps<Theme> = {
  borderBottom: 0,
  backgroundColor: 'var(--app-expanded-row-background)',
  py: 2,
};
