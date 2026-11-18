import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

/** 페이지 상단 파란색 헤더 (텍스트만 표시, 네비게이션 없음) */
export default function PageHeader({ title }) {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <Typography variant="h6" component="h1" sx={{ fontWeight: 700, wordBreak: 'keep-all' }}>
            {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
