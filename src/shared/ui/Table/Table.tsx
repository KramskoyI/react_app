import { Fragment } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {
  clickableTableRowStyles,
  expandedRowCellStyles,
  tableHeadCellStyles,
  tableContainerStyles,
  tableRootStyles,
} from './styles';
import type { Column, ExpandedRowConfig } from './types';

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  expandedRowConfig?: ExpandedRowConfig<T>;
};

export const CustomTable = <T,>({
  columns,
  data,
  expandedRowConfig,
}: TableProps<T>) => {
  return (
    <TableContainer component={Paper} sx={tableContainerStyles}>
      <Table sx={tableRootStyles} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns.map(({ title, align, width }) => (
              <TableCell
                align={align || undefined}
                key={title}
                width={width}
                sx={tableHeadCellStyles}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIdx) => {
            const rowKey = expandedRowConfig
              ? expandedRowConfig.getRowKey(row)
              : String(rowIdx);
            const isExpanded = expandedRowConfig?.expandedRowKey === rowKey;

            return (
              <Fragment key={rowKey}>
                <TableRow
                  hover={Boolean(expandedRowConfig)}
                  onClick={
                    expandedRowConfig
                      ? () => expandedRowConfig.onRowClick(row)
                      : undefined
                  }
                  sx={expandedRowConfig ? clickableTableRowStyles : undefined}>
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
                {isExpanded && expandedRowConfig ? (
                  <TableRow key={`${rowKey}-expanded`}>
                    <TableCell
                      colSpan={columns.length}
                      sx={expandedRowCellStyles}>
                      {expandedRowConfig.renderExpandedRow(row)}
                    </TableCell>
                  </TableRow>
                ) : null}
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
