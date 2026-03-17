import {
  type FC,
  type ReactElement,
  type Ref,
  forwardRef,
  useState,
} from 'react';

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

import { writeOffReasonDescription, writeOffReasons } from '../model/constants';
import type { WriteOffModalProps } from '../model/types';
import {
  dialogTitleStyles,
  writeOffCountFieldStyles,
  writeOffMenuItemStyles,
  writeOffReasonFieldStyles,
} from './styles';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
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
      <DialogTitle sx={dialogTitleStyles}>
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
        sx={writeOffCountFieldStyles}
      />
      <FormControl fullWidth size="small" sx={writeOffReasonFieldStyles}>
        <InputLabel>Причина списания</InputLabel>
        <Select
          value={reason}
          label="Причина списания"
          onChange={(event) => setReason(event.target.value)}>
          {writeOffReasons.map((item) => (
            <MenuItem key={item} value={item} sx={writeOffMenuItemStyles}>
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
