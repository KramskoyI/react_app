import { type FC, type ReactElement, type Ref, forwardRef } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';

import type { DeleteProductModalProps } from '../model/types';
import { dialogTitleStyles } from './styles';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DeleteProductModal: FC<DeleteProductModalProps> = ({
  open,
  handleClose,
  handleAgree,
}) => {
  return (
    <Dialog
      open={open}
      slots={{
        transition: Transition,
      }}
      keepMounted
      onClose={handleClose}
      aria-describedby="delete-product-dialog-description">
      <DialogTitle sx={dialogTitleStyles}>
        Вы точно хотите удалить товар со склада?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-product-dialog-description">
          После удаления товара со склада для восстановления нужно будет вручную
          его добавить.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAgree}>Удалить</Button>
        <Button onClick={handleClose}>Отмена</Button>
      </DialogActions>
    </Dialog>
  );
};
