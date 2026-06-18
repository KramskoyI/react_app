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
import { deleteProductModalText } from './content';
import {
  deleteProductInfoTextLooseStyles,
  deleteProductInfoTextStyles,
  dialogTitleStyles,
} from './styles';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DeleteProductModal: FC<DeleteProductModalProps> = ({
  open,
  product,
  handleClose,
  handleAgree,
}) => {
  return (
    <Dialog
      open={open}
      slots={{
        transition: Transition,
      }}
      onClose={handleClose}
      aria-describedby="delete-product-dialog-description">
      <DialogTitle sx={dialogTitleStyles}>
        {deleteProductModalText.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={deleteProductInfoTextStyles}>
          {deleteProductModalText.productLabel}: {product?.name ?? 'Не выбран'}
        </DialogContentText>
        <DialogContentText sx={deleteProductInfoTextLooseStyles}>
          {deleteProductModalText.skuLabel}: {product?.sku ?? 'Не выбран'}
        </DialogContentText>
        <DialogContentText id="delete-product-dialog-description">
          {deleteProductModalText.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{deleteProductModalText.cancel}</Button>
        <Button
          onClick={() => {
            if (!product) {
              return;
            }

            handleAgree(product);
          }}
          disabled={!product}>
          {deleteProductModalText.submit}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
