import type { SxProps, Theme } from '@mui/material';

import { uiColors } from '@shared/config/ui';

export const tableHeadCellStyles: SxProps<Theme> = {
  color: 'text.primary',
};

export const clickableTableRowStyles: SxProps<Theme> = {
  cursor: 'pointer',
};

export const expandedRowCellStyles: SxProps<Theme> = {
  borderBottom: 0,
  backgroundColor: uiColors.expandedRowBackground,
  py: 2,
};
