import type React from 'react';

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
  render?: (row: T) => React.ReactNode;
  align?: Position;
  width?: string;
};
