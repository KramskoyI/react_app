import AddIcon from '@mui/icons-material/Add';
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import { TitlePage } from '@shared/ui';

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
    {
      title: '',
      render: (row) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Удалить товар со склада">
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Произвести списание">
            <IconButton>
              <CreditCardOffOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
      width: '50px',
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
      <TitlePage text="Склад" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<AddIcon />}
          sx={{
            m: '1rem 0',
            px: 2,
            py: 1.25,
            color: 'text.primary',
            justifyContent: 'center',
            textTransform: 'none',
            borderColor: 'text.primary',
          }}>
          Добавить позицию
        </Button>
      </Box>
      <CustomTable columns={columns} data={tovar} />
    </div>
  );
};
