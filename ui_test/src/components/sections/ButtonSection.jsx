import { useState } from 'react'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

const VARIANTS = ['contained', 'outlined', 'text']
const COLORS = ['primary', 'secondary', 'error']

export default function ButtonSection() {
  const [alertInfo, setAlertInfo] = useState({ open: false, variant: '', color: '' })

  const handleClick = (variant, color) => {
    setAlertInfo({ open: true, variant, color })
  }

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') return
    setAlertInfo((prev) => ({ ...prev, open: false }))
  }

  return (
    <SectionContainer
      id="button"
      title="Button"
      description="variant 3가지 × color 3가지 조합입니다. 버튼을 클릭하면 알림이 표시됩니다."
    >
      <Stack spacing={3}>
        {VARIANTS.map((variant) => (
          <Stack key={variant} spacing={1}>
            <Typography variant="subtitle2" color="text.secondary">
              {variant}
            </Typography>
            <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
              {COLORS.map((color) => (
                <Button
                  key={color}
                  variant={variant}
                  color={color}
                  onClick={() => handleClick(variant, color)}
                >
                  {color}
                </Button>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Snackbar
        open={alertInfo.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={alertInfo.color === 'error' ? 'error' : 'info'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {`${alertInfo.variant} / ${alertInfo.color} 버튼을 클릭했습니다!`}
        </Alert>
      </Snackbar>
    </SectionContainer>
  )
}