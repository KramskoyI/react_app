import type { PaletteMode } from '@mui/material';

export type ThemePaletteTokens = {
  backgroundDefault: string;
  backgroundPaper: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  tableHeadBackground: string;
  tableRowAlternate: string;
  expandedRowBackground: string;
  menuSurface: string;
  tableContainerShadow: string;
  themeTransitionOverlay: string;
  toggleButtonShadow: string;
  toggleThumbBackground: string;
  toggleThumbShadow: string;
  toggleActiveIconColor: string;
};

export const getThemePaletteTokens = (
  mode: PaletteMode
): ThemePaletteTokens => {
  if (mode === 'dark') {
    return {
      backgroundDefault: '#0B1220',
      backgroundPaper: '#111827',
      textPrimary: '#E5E7EB',
      textSecondary: '#94A3B8',
      border: 'rgba(148, 163, 184, 0.24)',
      tableHeadBackground: '#172033',
      tableRowAlternate: '#0F172A',
      expandedRowBackground: '#0F1B31',
      menuSurface: 'rgba(15, 23, 42, 0.72)',
      tableContainerShadow: '0 1px 2px rgba(2, 6, 23, 0.45)',
      themeTransitionOverlay:
        'radial-gradient(circle at top, rgba(37, 99, 235, 0.12), rgba(15, 23, 42, 0.18) 55%, rgba(2, 6, 23, 0.24) 100%)',
      toggleButtonShadow: '0 8px 24px rgba(2, 6, 23, 0.32)',
      toggleThumbBackground: 'linear-gradient(135deg, #1D4ED8 0%, #0F172A 100%)',
      toggleThumbShadow: '0 8px 18px rgba(37, 99, 235, 0.28)',
      toggleActiveIconColor: '#FFFFFF',
    };
  }

  return {
    backgroundDefault: '#F4F5F7',
    backgroundPaper: '#FFFFFF',
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    tableHeadBackground: '#E5E7EB',
    tableRowAlternate: '#F9FAFB',
    expandedRowBackground: '#F8FAFC',
    menuSurface: 'rgba(255, 255, 255, 0.82)',
    tableContainerShadow: '0 1px 2px rgba(15, 23, 42, 0.06)',
    themeTransitionOverlay:
      'radial-gradient(circle at top, rgba(255, 255, 255, 0.16), rgba(248, 250, 252, 0.2) 55%, rgba(226, 232, 240, 0.26) 100%)',
    toggleButtonShadow: '0 8px 24px rgba(15, 23, 42, 0.1)',
    toggleThumbBackground: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
    toggleThumbShadow: '0 8px 18px rgba(245, 158, 11, 0.35)',
    toggleActiveIconColor: '#FFFFFF',
  };
};
