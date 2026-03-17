export type WriteOffModalProps = {
  open: boolean;
  handleClose: () => void;
  handleAgree: () => void;
};

export enum WriteOffReason {
  Defective = 'DEFECTIVE',
  Expired = 'EXPIRED',
  Damaged = 'DAMAGED',
}
