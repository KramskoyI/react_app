import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F4F5F7',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#2563EB',
    },
    text: {
      primary: '#E5E7EB',
      secondary: '#6B7280',
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
      color: '#6B7280',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 1px 2px rgba(15, 23, 42, 0.06)',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.MuiTableRow-hover:hover': {
            backgroundColor: '#F3F4F6',
          },
          '&:nth-of-type(even)': {
            backgroundColor: '#F9FAFB',
          },
          '&:last-child td, &:last-child th': {
            borderBottom: 0,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #E5E7EB',
          fontSize: '0.875rem',
          color: '#111827',
        },
        head: {
          backgroundColor: '#858585',
          color: '#9c9d9e',
          fontWeight: 600,
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
