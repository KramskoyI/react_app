import { Typography } from '@mui/material';

import {
  type Column,
  CustomTable,
  Position,
} from '../../shared/ui/Table/Table';

export const Warehouse = () => {
  type Tovar = {
    name: string;
    sum: number;
  };

  const columns: Column<Tovar>[] = [
    {
      key: 'name',
      title: 'Наименование',
    },
    {
      key: 'sum',
      title: 'Количество',
      align: Position.Center,
    },
  ];

  const tovar: Tovar[] = [
    {
      name: 'jbgsdfjgfbjug',
      sum: 10,
    },
    {
      name: '34534w6ythxdbhvxcb',
      sum: 1,
    },
    {
      name: 'jbbxgcvbn vb ug',
      sum: 100,
    },
  ];

  return (
    <div>
      <Typography variant="h1" component="h2" color="text.primary">
        Склад
      </Typography>
      <CustomTable columns={columns} data={tovar} />
    </div>
  );
};
