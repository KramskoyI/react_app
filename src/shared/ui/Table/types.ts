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
