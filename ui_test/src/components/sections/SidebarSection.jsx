import { useRef, useState } from 'react'
import AnimationIcon from '@mui/icons-material/Animation'
import MenuIcon from '@mui/icons-material/Menu'
import SmartButtonIcon from '@mui/icons-material/SmartButton'
import StyleIcon from '@mui/icons-material/Style'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

// 각 링크는 페이지 안의 섹션 id로 이동합니다.
const NAV_LINKS = [
  { id: 'button', label: 'Button', Icon: SmartButtonIcon },
  { id: 'input', label: 'Input', Icon: TextFieldsIcon },
  { id: 'card', label: 'Card', Icon: StyleIcon },
  { id: 'animation', label: 'Animation', Icon: AnimationIcon },
]

export default function SidebarSection() {
  const [open, setOpen] = useState(false)
  const [anchor, setAnchor] = useState('left')
  const pendingTarget = useRef(null) // 닫힌 뒤 이동할 섹션 id

  const handleLinkClick = (event, id) => {
    event.preventDefault()
    pendingTarget.current = id
    setOpen(false)
  }

  // Drawer가 열려 있는 동안에는 body 스크롤이 잠기므로, 완전히 닫힌 뒤에 이동합니다.
  const handleExited = () => {
    const id = pendingTarget.current
    pendingTarget.current = null
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <SectionContainer
      id="sidebar"
      title="Sidebar"
      description="Drawer로 만든 사이드바입니다. 위치(왼쪽/오른쪽)를 고른 뒤 버튼으로 열고 닫을 수 있고, 안의 링크를 누르면 해당 섹션으로 이동합니다."
    >
      <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
        <ToggleButtonGroup
          exclusive
          size="small"
          value={anchor}
          onChange={(_event, value) => value && setAnchor(value)}
          aria-label="사이드바 위치"
        >
          <ToggleButton value="left">왼쪽</ToggleButton>
          <ToggleButton value="right">오른쪽</ToggleButton>
        </ToggleButtonGroup>

        <Button variant="contained" startIcon={<MenuIcon />} onClick={() => setOpen((prev) => !prev)}>
          사이드바 {open ? '닫기' : '열기'}
        </Button>

        <Typography variant="body2" color="text.secondary">
          현재 위치: {anchor === 'left' ? '왼쪽' : '오른쪽'} / 상태: {open ? '열림' : '닫힘'}
        </Typography>
      </Stack>

      <Drawer
        anchor={anchor}
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ transition: { onExited: handleExited } }}
      >
        <Box sx={{ width: 260 }} role="navigation" aria-label="사이드바 메뉴">
          <Typography variant="h6" sx={{ p: 2, fontWeight: 700 }}>
            UI Test
          </Typography>
          <Divider />
          <List>
            {NAV_LINKS.map(({ id, label, Icon }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton component="a" href={`#${id}`} onClick={(event) => handleLinkClick(event, id)}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </SectionContainer>
  )
}
