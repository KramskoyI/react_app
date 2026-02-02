import type { FC } from 'react';
import React, { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slide,
  TextField,
} from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';

type TModalProps = {
  open: boolean;
  handleClose: () => void;
  handleAgree: () => void;
};



const UNITS = ['шт', 'упаковка', 'кг'];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const WriteOffModal: FC<TModalProps> = ({ open, handleClose }) => {
  const [count, setCount] = useState(0);

  const [unit, setUnit] = useState<string>(UNITS[0]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle sx={{ color: 'text.secondary' }}>
          {'Вы точно хотите списать товар со склада?'}
        </DialogTitle>
        <TextField
          label="Количество"
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          fullWidth
          size="small"
          InputProps={{ inputProps: { min: 0 } }}
          sx={{
            mx: 2,
            width: '90%',
            '& .MuiInputBase-input': {
              color: 'text.secondary',
              '&:focus': {
                color: 'text.secondary',
              },
              '&:hover': {
                color: 'text.secondary',
              },
            },
            '& .MuiOutlinedInput-root': {
              color: 'text.primary',
              '& fieldset': {
                borderColor: 'rgba(148, 163, 184, 0.6)',
              },
              '&:hover fieldset': {
                borderColor: 'text.secondary',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'text.secondary',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'text.secondary',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'text.secondary',
            },
          }}
        />

        <FormControl
          fullWidth
          size="small"
          sx={{
            mx: 2,
            my: 2,
            width: '90%',
            '& .MuiInputLabel-root': {
              color: 'text.secondary',
              '&.Mui-focused': {
                color: 'text.secondary',
              },
            },
             '& .MuiInputBase-input': {
              color: 'text.secondary',
              '&:focus': {
                color: 'text.secondary',
              },
              '&:hover': {
                color: 'text.secondary',
              },
            },
            '& .MuiOutlinedInput-root': {
              color: 'text.primary',
              '& fieldset': {
                borderColor: 'rgba(148, 163, 184, 0.6)',
              },
              '&:hover fieldset': {
                borderColor: 'text.secondary',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'text.secondary',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'text.secondary',
            },
          }}>
          <InputLabel>Причина списания</InputLabel>
          <Select
            value={unit}
            label="Причина списания"
            onChange={(e) => setUnit(e.target.value)}>
            {UNITS.map((u) => (
              <MenuItem key={u} value={u} sx={{ color: 'text.secondary' }}>
                {u}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            После Списания товара со склада для востановления нужно будет
            вручную его добавить.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Списать</Button>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
