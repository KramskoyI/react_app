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
import { type WriteOffModalProps, WriteOffReason } from '../model/types';
import { writeOffModalText } from './content';
import {
  dialogTitleStyles,
  writeOffCountFieldStyles,
  writeOffMenuItemStyles,
  writeOffReasonFieldStyles,
} from './styles';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const WriteOffModal: FC<WriteOffModalProps> = ({
  open,
  product,
  handleClose,
  handleAgree,
}) => {
  const [count, setCount] = useState<number | ''>('');
  const [reason, setReason] = useState<WriteOffReason | ''>('');

  const handleModalClose = () => {
    setCount('');
    setReason('');
    handleClose();
  };

  return (
    <Dialog
      open={open}
      slots={{
        transition: Transition,
      }}
      onClose={handleModalClose}
      aria-describedby="write-off-dialog-description">
      <DialogTitle sx={dialogTitleStyles}>
        {writeOffModalText.title}
      </DialogTitle>
      <DialogContent sx={{ pb: 1 }}>
        <DialogContentText sx={{ mb: 1 }}>
          {writeOffModalText.productLabel}: {product?.name ?? 'Не выбран'}
        </DialogContentText>
        <DialogContentText sx={{ mb: 1 }}>
          {writeOffModalText.skuLabel}: {product?.sku ?? 'Не выбран'}
        </DialogContentText>
        <DialogContentText sx={{ mb: 0 }}>
          {writeOffModalText.availableLabel}: {product?.quantity ?? 0}{' '}
          {product?.unit ?? 'шт'}
        </DialogContentText>
      </DialogContent>
      <TextField
        label={writeOffModalText.countLabel}
        type="number"
        value={count}
        onChange={(event) => {
          const value = event.target.value;
          setCount(value === '' ? '' : Number(value));
        }}
        fullWidth
        size="small"
        InputProps={{ inputProps: { min: 0, max: product?.quantity ?? 0 } }}
        sx={writeOffCountFieldStyles}
      />
      <FormControl fullWidth size="small" sx={writeOffReasonFieldStyles}>
        <InputLabel>{writeOffModalText.reasonLabel}</InputLabel>
        <Select
          value={reason}
          label={writeOffModalText.reasonLabel}
          onChange={(event) => setReason(event.target.value as WriteOffReason)}>
          {writeOffReasons.map((item) => (
            <MenuItem key={item} value={item} sx={writeOffMenuItemStyles}>
              {writeOffReasonDescription[item]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <DialogContent>
        <DialogContentText id="write-off-dialog-description">
          {writeOffModalText.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModalClose}>{writeOffModalText.cancel}</Button>
        <Button
          onClick={() => {
            if (
              !product ||
              !reason ||
              count === '' ||
              count <= 0 ||
              count > product.quantity
            ) {
              return;
            }

            handleAgree({
              product,
              count,
              reason,
            });
          }}
          disabled={
            !product ||
            !reason ||
            count === '' ||
            count <= 0 ||
            count > product.quantity
          }>
          {writeOffModalText.submit}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
