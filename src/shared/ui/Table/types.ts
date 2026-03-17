import type { ReactNode } from 'react';

export enum Position {
  Center = 'center',
  Left = 'left',
  Right = 'right',
  Inherit = 'inherit',
  Justify = 'justify',
}

export type Column<T> = {
  key?: keyof T;
  title: string;
  render?: (row: T) => ReactNode;
  align?: Position;
  width?: string;
};

export type ExpandedRowConfig<T> = {
  expandedRowKey: string | null;
  getRowKey: (row: T) => string;
  onRowClick: (row: T) => void;
  renderExpandedRow: (row: T) => ReactNode;
};
