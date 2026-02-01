import * as React from 'react';

import { TableHead } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

export enum Position {
  Center = 'center',
  Left = 'left',
  Right = 'right',
  Inherit = 'inherit',
  Justify = 'justify',
}

export type Column<T> = {
  /** Ключ поля (если просто показываем значение) */
  key?: keyof T;
  /** Заголовок колонки */
  title: string;
  /** Кастомный рендер ячейки */
  render?: (row: T) => React.ReactNode;
  /** Положение title */
  align?: Position;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export const CustomTable = <T,>({ columns, data }: TableProps<T>) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns.map(({ title, align }) => (
              <TableCell
                align={align || undefined}
                key={title}
                sx={{ color: 'text.primary' }}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIdx) => (
            <TableRow key={rowIdx}>
              {columns.map((col, colIdx) => (
                <TableCell key={colIdx} align={col.align}>
                  {col.render
                    ? col.render(row)
                    : col.key
                      ? String(row[col.key])
                      : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
