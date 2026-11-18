import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Alert from '@mui/material/Alert'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Snackbar from '@mui/material/Snackbar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

const MENUS = ['홈', '소개', '서비스', '연락처']

export default function NavigationSection() {
  const [anchorEl, setAnchorEl] = useState(null) // 모바일 햄버거 메뉴 위치
  const [selected, setSelected] = useState({ open: false, name: '' })

  const showAlert = (name) => setSelected({ open: true, name })

  const handleDesktopClick = (name) => showAlert(name)

  const handleMobileClick = (name) => {
    setAnchorEl(null)
    showAlert(name)
  }

  const handleAlertClose = (_event, reason) => {
    if (reason === 'clickaway') return
    setSelected((prev) => ({ ...prev, open: false }))
  }

  return (
    <SectionContainer
      id="navigation"
      title="Navigation"
      description="AppBar + Toolbar 기반 메뉴입니다. 메뉴를 클릭하면 메뉴명이 알림으로 표시되며, 좁은 화면(600px 미만)에서는 햄버거 메뉴로 바뀝니다."
    >
      <AppBar position="static" color="primary" sx={{ borderRadius: 1 }}>
        <Toolbar>
          {/* 모바일: 햄버거 버튼 */}
          <IconButton
            color="inherit"
            edge="start"
            aria-label="메뉴 열기"
            aria-controls={anchorEl ? 'nav-mobile-menu' : undefined}
            aria-haspopup="true"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            sx={{ mr: 1, display: { xs: 'inline-flex', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ fontWeight: 700, flexGrow: { xs: 1, sm: 0 }, mr: { sm: 3 } }}>
            MyApp
          </Typography>

          {/* 데스크톱: 가로 메뉴 */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            {MENUS.map((name) => (
              <Button key={name} color="inherit" onClick={() => handleDesktopClick(name)}>
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        id="nav-mobile-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {MENUS.map((name) => (
          <MenuItem key={name} onClick={() => handleMobileClick(name)}>
            {name}
          </MenuItem>
        ))}
      </Menu>

      <Snackbar
        open={selected.open}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleAlertClose} severity="info" variant="filled" sx={{ width: '100%' }}>
          {`${selected.name} 메뉴를 클릭했습니다!`}
        </Alert>
      </Snackbar>
    </SectionContainer>
  )
}
