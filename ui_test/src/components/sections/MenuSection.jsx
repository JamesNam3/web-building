import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SettingsIcon from '@mui/icons-material/Settings'
import ShareIcon from '@mui/icons-material/Share'
import Button from '@mui/material/Button'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

const MENU_ITEMS = [
  { id: 'edit', label: '편집', Icon: EditIcon },
  { id: 'copy', label: '복사', Icon: FileCopyIcon },
  { id: 'share', label: '공유', Icon: ShareIcon },
  { id: 'settings', label: '설정', Icon: SettingsIcon },
  { id: 'delete', label: '삭제', Icon: DeleteIcon, color: 'error.main' },
]

export default function MenuSection() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selected, setSelected] = useState('')

  const open = Boolean(anchorEl)

  const handleClose = () => setAnchorEl(null)

  const handleSelect = (label) => {
    setSelected(label)
    handleClose()
  }

  return (
    <SectionContainer
      id="menu"
      title="Menu"
      description="버튼을 누르면 아이콘이 있는 메뉴가 열립니다. 항목을 선택하면 아래에 표시됩니다."
    >
      <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
        <Button
          id="menu-button"
          variant="contained"
          aria-controls={open ? 'action-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          endIcon={<KeyboardArrowDownIcon />}
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          메뉴 열기
        </Button>

        <Menu
          id="action-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{ list: { 'aria-labelledby': 'menu-button' } }}
        >
          {MENU_ITEMS.map(({ id, label, Icon, color }) => (
            <MenuItem key={id} onClick={() => handleSelect(label)} sx={{ color }}>
              <ListItemIcon sx={{ color: 'inherit' }}>
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{label}</ListItemText>
            </MenuItem>
          ))}
        </Menu>

        <Typography variant="body2" color="text.secondary">
          선택된 메뉴: {selected || '(없음)'}
        </Typography>
      </Stack>
    </SectionContainer>
  )
}
