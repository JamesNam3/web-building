import { createTheme } from '@mui/material/styles';

/** 컬러 팔레트 디자인 시스템의 CSS 변수를 MUI 테마에 연결 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#0A4FA8',
      light: '#0A6BC4',
      dark: '#0B2F7A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0B2F7A',
      light: '#0A6BC4',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
    },
    background: {
      default: 'var(--color-bg-primary)',
      paper: 'var(--color-bg-primary)',
    },
    divider: 'var(--color-border-subtle)',
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans KR", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: 'var(--color-button-primary)',
          color: 'var(--color-text-on-primary)',
          '&:hover': {
            backgroundColor: 'var(--color-button-hover)',
          },
        },
      },
    },
  },
});

export default theme;
