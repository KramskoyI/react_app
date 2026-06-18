import { alpha, createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

import {
  themeColorTransition,
  themeInteractiveTransition,
  themeLinkTransition,
  themeSharedTransition,
} from './transitions';
import { getThemePaletteTokens } from './themeTokens';

export const createAppTheme = (mode: PaletteMode) => {
  const colors = getThemePaletteTokens(mode);

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#2563EB',
      },
      background: {
        default: colors.backgroundDefault,
        paper: colors.backgroundPaper,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
      divider: colors.border,
      action: {
        hover:
          mode === 'dark'
            ? alpha('#FFFFFF', 0.06)
            : alpha('#111827', 0.04),
      },
    },
    typography: {
      fontFamily: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'sans-serif',
      ].join(','),
      fontSize: 14,
      h1: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '0.875rem',
      },
      body2: {
        fontSize: '0.75rem',
        color: colors.textSecondary,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            '--app-menu-surface': colors.menuSurface,
            '--app-expanded-row-background': colors.expandedRowBackground,
            '--app-toggle-button-shadow': colors.toggleButtonShadow,
            '--app-toggle-thumb-background': colors.toggleThumbBackground,
            '--app-toggle-thumb-shadow': colors.toggleThumbShadow,
            '--app-toggle-active-icon-color': colors.toggleActiveIconColor,
          },
          body: {
            backgroundColor: colors.backgroundDefault,
            color: colors.textPrimary,
            transition: themeSharedTransition,
          },
          '#root': {
            transition: themeSharedTransition,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            transition: themeSharedTransition,
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: colors.tableContainerShadow,
            border: `1px solid ${colors.border}`,
            transition: themeSharedTransition,
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            '&.MuiTableRow-hover:hover': {
              backgroundColor: alpha(colors.textPrimary, mode === 'dark' ? 0.06 : 0.04),
            },
            '&:nth-of-type(even)': {
              backgroundColor: colors.tableRowAlternate,
            },
            '&:last-child td, &:last-child th': {
              borderBottom: 0,
            },
            transition: themeSharedTransition,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: `1px solid ${colors.border}`,
            fontSize: '0.875rem',
            color: colors.textPrimary,
            transition: themeSharedTransition,
          },
          head: {
            backgroundColor: colors.tableHeadBackground,
            color: colors.textPrimary,
            fontWeight: 600,
            whiteSpace: 'nowrap',
            transition: themeSharedTransition,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            transition: themeColorTransition,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            transition: themeSharedTransition,
          },
          outlined: {
            borderColor: colors.border,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: themeInteractiveTransition,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            transition: themeLinkTransition,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            transition: themeSharedTransition,
            '& fieldset': {
              transition: themeSharedTransition,
            },
          },
          input: {
            transition: themeLinkTransition,
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            border: `1px solid ${colors.border}`,
            transition: themeSharedTransition,
          },
        },
      },
    },
  });
};
