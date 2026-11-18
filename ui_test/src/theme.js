import { createTheme } from '@mui/material/styles'

// 앱 전체에 적용되는 기본 MUI 테마입니다.
// 색상, 폰트, 컴포넌트 기본값은 여기서 일괄 수정하세요.
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: { default: '#f5f7fa' },
  },
  typography: {
    fontFamily: ['"Pretendard"', '"Noto Sans KR"', 'system-ui', 'sans-serif'].join(','),
  },
  shape: { borderRadius: 8 },
})

export default theme