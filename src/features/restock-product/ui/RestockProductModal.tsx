import {
  forwardRef,
  useEffect,
  useState,
  type FC,
  type ReactElement,
  type Ref,
} from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TextField,
} from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';

import type { RestockProductModalProps } from '../model/types';
import { restockProductModalText } from './content';
import { dialogTitleStyles, restockCountFieldStyles } from './styles';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const RestockProductModal: FC<RestockProductModalProps> = ({
  open,
  product,
  handleClose,
  handleAgree,
}) => {
  const [count, setCount] = useState<number | ''>('');

  useEffect(() => {
    if (!open) {
      setCount('');
    }
  }, [open]);

  const handleModalClose = () => {
    setCount('');
    handleClose();
  };

  return (
    <Dialog
      open={open}
      slots={{
        transition: Transition,
      }}
      keepMounted
      onClose={handleModalClose}
      aria-describedby="restock-product-dialog-description">
      <DialogTitle sx={dialogTitleStyles}>
        {restockProductModalText.title}
      </DialogTitle>
      <DialogContent sx={{ pb: 1 }}>
        <DialogContentText sx={{ mb: 1 }}>
          {restockProductModalText.productLabel}: {product?.name ?? 'Не выбран'}
        </DialogContentText>
        <DialogContentText sx={{ mb: 1 }}>
          {restockProductModalText.skuLabel}: {product?.sku ?? 'Не выбран'}
        </DialogContentText>
        <DialogContentText sx={{ mb: 0 }}>
          {restockProductModalText.currentQuantityLabel}: {product?.quantity ?? 0}{' '}
          {product?.unit ?? 'шт'}
        </DialogContentText>
      </DialogContent>
      <TextField
        label={restockProductModalText.countLabel}
        type="number"
        value={count}
        onChange={(event) => {
          const value = event.target.value;
          setCount(value === '' ? '' : Number(value));
        }}
        fullWidth
        size="small"
        InputProps={{ inputProps: { min: 0 } }}
        sx={restockCountFieldStyles}
      />
      <DialogContent>
        <DialogContentText id="restock-product-dialog-description">
          {restockProductModalText.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModalClose}>{restockProductModalText.cancel}</Button>
        <Button
          onClick={() => {
            if (!product || count === '' || count <= 0) {
              return;
            }

            handleAgree({
              product,
              count,
            });
          }}
          disabled={!product || count === '' || count <= 0}>
          {restockProductModalText.submit}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
