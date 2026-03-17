import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import type { Column } from './types';

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export const CustomTable = <T,>({ columns, data }: TableProps<T>) => {
  return (
    <TableContainer component={Paper} sx={{ my: '1rem' }}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns.map(({ title, align, width }) => (
              <TableCell
                align={align || undefined}
                key={title}
                width={width}
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
