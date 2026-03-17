import type { FC } from 'react';
import React from 'react';

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

type DeleteProductModalProps = {
  open: boolean;
  handleClose: () => void;
  handleAgree: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
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
      <DialogTitle sx={{ color: 'text.secondary' }}>
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
