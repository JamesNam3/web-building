import { useState } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

const VARIANTS = ['standard', 'outlined', 'filled']

export default function InputSection() {
  // variant별 입력값을 하나의 객체로 관리합니다.
  const [values, setValues] = useState({ standard: '', outlined: '', filled: '' })

  const handleChange = (variant) => (event) => {
    setValues((prev) => ({ ...prev, [variant]: event.target.value }))
  }

  return (
    <SectionContainer
      id="input"
      title="Input"
      description="TextField의 variant 3가지입니다. 입력한 값이 아래에 실시간으로 표시됩니다."
    >
      <Stack spacing={4}>
        {VARIANTS.map((variant) => (
          <Stack key={variant} spacing={1}>
            <TextField
              variant={variant}
              label={`${variant} 입력`}
              placeholder="내용을 입력하세요"
              value={values[variant]}
              onChange={handleChange(variant)}
              // label이 항상 위로 올라가 있어 placeholder가 바로 보이게 합니다.
              slotProps={{ inputLabel: { shrink: true } }}
              fullWidth
            />
            <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'break-all' }}>
              입력값: {values[variant] || '(없음)'}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </SectionContainer>
  )
}
