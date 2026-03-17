import { WriteOffReason } from './types';

export const writeOffReasonDescription: Record<WriteOffReason, string> = {
  [WriteOffReason.Defective]: 'Брак',
  [WriteOffReason.Damaged]: 'Повреждение',
  [WriteOffReason.Expired]: 'Просрочен срок годности',
};

export const writeOffReasons = [
  WriteOffReason.Defective,
  WriteOffReason.Damaged,
  WriteOffReason.Expired,
];
