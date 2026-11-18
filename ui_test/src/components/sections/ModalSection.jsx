import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

export default function ModalSection() {
  const [open, setOpen] = useState(false)
  const [result, setResult] = useState('')

  // 닫기 버튼, 배경 클릭, Esc 키 모두 onClose로 들어옵니다.
  const handleClose = (_event, reason) => {
    setOpen(false)
    if (reason === 'backdropClick') setResult('배경 클릭으로 닫힘')
    else if (reason === 'escapeKeyDown') setResult('Esc 키로 닫힘')
    else setResult('닫기 버튼으로 닫힘')
  }

  const handleConfirm = () => {
    setOpen(false)
    setResult('확인을 눌렀습니다')
  }

  const handleCancel = () => {
    setOpen(false)
    setResult('취소를 눌렀습니다')
  }

  return (
    <SectionContainer
      id="modal"
      title="Modal"
      description="버튼을 누르면 Dialog가 열립니다. 확인/취소/닫기(X) 버튼이나 배경 클릭으로 닫을 수 있습니다."
    >
      <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          모달 열기
        </Button>

        <Typography variant="body2" color="text.secondary">
          마지막 동작: {result || '(없음)'}
        </Typography>
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="modal-title" sx={{ pr: 6 }}>
          모달 제목
        </DialogTitle>
        <IconButton
          aria-label="닫기"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent>
          <DialogContentText id="modal-description" sx={{ wordBreak: 'keep-all' }}>
            MUI Dialog 컴포넌트로 만든 모달입니다. 아래 버튼을 누르거나, 오른쪽 위 X 버튼,
            또는 모달 바깥 배경을 클릭해 닫을 수 있습니다.
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleCancel} color="inherit">
            취소
          </Button>
          <Button onClick={handleConfirm} variant="contained" autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </SectionContainer>
  )
}
