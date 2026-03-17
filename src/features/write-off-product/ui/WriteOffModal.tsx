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

type WriteOffModalProps = {
  open: boolean;
  handleClose: () => void;
  handleAgree: () => void;
};

export enum WriteOffReason {
  Defective = 'DEFECTIVE',
  Expired = 'EXPIRED',
  Damaged = 'DAMAGED',
}

export const writeOffReasonDescription: Record<WriteOffReason, string> = {
  [WriteOffReason.Defective]: 'Брак',
  [WriteOffReason.Damaged]: 'Повреждение',
  [WriteOffReason.Expired]: 'Просрочен срок годности',
};

const writeOffReasons = [
  WriteOffReason.Defective,
  WriteOffReason.Damaged,
  WriteOffReason.Expired,
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const WriteOffModal: FC<WriteOffModalProps> = ({
  open,
  handleClose,
  handleAgree,
}) => {
  const [count, setCount] = useState(0);
  const [reason, setReason] = useState('');

  return (
    <Dialog
      open={open}
      slots={{
        transition: Transition,
      }}
      keepMounted
      onClose={handleClose}
      aria-describedby="write-off-dialog-description">
      <DialogTitle sx={{ color: 'text.secondary' }}>
        Вы точно хотите списать товар со склада?
      </DialogTitle>
      <TextField
        label="Количество"
        type="number"
        value={count}
        onChange={(event) => setCount(Number(event.target.value))}
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
          value={reason}
          label="Причина списания"
          onChange={(event) => setReason(event.target.value)}>
          {writeOffReasons.map((item) => (
            <MenuItem key={item} value={item} sx={{ color: 'text.secondary' }}>
              {writeOffReasonDescription[item]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <DialogContent>
        <DialogContentText id="write-off-dialog-description">
          После списания товара со склада для восстановления нужно будет вручную
          его добавить.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAgree}>Списать</Button>
        <Button onClick={handleClose}>Отмена</Button>
      </DialogActions>
    </Dialog>
  );
};
