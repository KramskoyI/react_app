import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F4F5F7', // общий фон
      paper: '#FFFFFF', // фон карточек/таблиц
    },
    primary: {
      main: '#2563EB', // синий акцент
    },
    text: {
      primary: '#E5E7EB', // основной текст
      secondary: '#6B7280', // вторичный / подписи
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
    fontSize: 14, // базовый размер для body1

    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.875rem', // 14px
    },
    body2: {
      fontSize: '0.75rem', // 12px
      color: '#6B7280',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    // Контейнер таблицы (Paper)
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 1px 2px rgba(15, 23, 42, 0.06)',
        },
      },
    },

    // Строки
    MuiTableRow: {
      styleOverrides: {
        root: {
          // hover только для строк, у которых передан prop hover
          '&.MuiTableRow-hover:hover': {
            backgroundColor: '#F3F4F6',
          },
          // зебра для body-строк
          '&:nth-of-type(even)': {
            backgroundColor: '#F9FAFB',
          },
          '&:last-child td, &:last-child th': {
            borderBottom: 0,
          },
        },
      },
    },

    // Ячейки
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #E5E7EB',
          fontSize: '0.875rem', // 14px
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

    // Можно слегка уменьшить плотность таблиц
    MuiTable: {
      styleOverrides: {
        root: {
          // если нужно - глобальные отступы в ячейках можно задать так:
          // '& .MuiTableCell-root': { paddingTop: 8, paddingBottom: 8 },
        },
      },
    },
  },
});
