import {
  type FC,
  type ReactElement,
  type Ref,
  forwardRef,
  useEffect,
  useState,
} from 'react';

import {
  Box,
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

import type { AddProductModalProps } from '../model/types';
import { addProductModalText } from './content';
import {
  dialogTitleStyles,
  productFieldStyles,
  productFieldsContainerStyles,
  skuErrorFieldStyles,
} from './styles';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AddProductModal: FC<AddProductModalProps> = ({
  open,
  existingSkus,
  handleClose,
  handleAgree,
}) => {
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [unit, setUnit] = useState('шт');
  const [skuError, setSkuError] = useState('');

  useEffect(() => {
    if (!open) {
      setSkuError('');
    }
  }, [open]);

  const resetForm = () => {
    setName('');
    setSku('');
    setPrice('');
    setQuantity('');
    setUnit('шт');
    setSkuError('');
  };

  const handleSubmit = () => {
    if (
      !name.trim() ||
      !sku.trim() ||
      price === '' ||
      price < 0 ||
      quantity === '' ||
      quantity <= 0 ||
      !unit.trim()
    ) {
      return;
    }

    const normalizedSku = sku.trim().toLowerCase();
    const skuExists = existingSkus.some(
      (item) => item.trim().toLowerCase() === normalizedSku
    );

    if (skuExists) {
      setSkuError(addProductModalText.skuExistsError);
      return;
    }

    handleAgree({
      name: name.trim(),
      sku: sku.trim(),
      price,
      quantity,
      unit: unit.trim(),
    });

    resetForm();
  };

  const handleModalClose = () => {
    resetForm();
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
      aria-describedby="add-product-dialog-description">
      <DialogTitle sx={dialogTitleStyles}>
        {addProductModalText.title}
      </DialogTitle>
      <DialogContent>
        <Box sx={productFieldsContainerStyles}>
          <TextField
            label={addProductModalText.nameLabel}
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
            size="small"
            sx={productFieldStyles}
          />
          <TextField
            label={addProductModalText.skuLabel}
            value={sku}
            onChange={(event) => setSku(event.target.value)}
            onFocus={() => {
              if (skuError) {
                setSkuError('');
              }
            }}
            fullWidth
            size="small"
            error={Boolean(skuError)}
            helperText={skuError}
            sx={skuError ? skuErrorFieldStyles : productFieldStyles}
          />
          <TextField
            label={addProductModalText.priceLabel}
            type="number"
            value={price}
            onChange={(event) => {
              const value = event.target.value;
              setPrice(value === '' ? '' : Number(value));
            }}
            fullWidth
            size="small"
            InputProps={{ inputProps: { min: 0, step: '0.01' } }}
            sx={productFieldStyles}
          />
          <TextField
            label={addProductModalText.quantityLabel}
            type="number"
            value={quantity}
            onChange={(event) => {
              const value = event.target.value;
              setQuantity(value === '' ? '' : Number(value));
            }}
            fullWidth
            size="small"
            InputProps={{ inputProps: { min: 0 } }}
            sx={productFieldStyles}
          />
          <TextField
            label={addProductModalText.unitLabel}
            value={unit}
            onChange={(event) => setUnit(event.target.value)}
            fullWidth
            size="small"
            sx={productFieldStyles}
          />
          <DialogContentText
            id="add-product-dialog-description"
            color="text.secondary">
            {addProductModalText.description}
          </DialogContentText>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModalClose}>{addProductModalText.cancel}</Button>
        <Button
          onClick={handleSubmit}
          disabled={
            !name.trim() ||
            !sku.trim() ||
            price === '' ||
            price < 0 ||
            quantity === '' ||
            quantity <= 0 ||
            !unit.trim()
          }>
          {addProductModalText.submit}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
