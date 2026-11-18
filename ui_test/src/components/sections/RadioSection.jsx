import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

const OPTIONS = [
  { value: 'small', label: '작게 (Small)' },
  { value: 'medium', label: '보통 (Medium)' },
  { value: 'large', label: '크게 (Large)' },
  { value: 'xlarge', label: '매우 크게 (X-Large)' },
]

export default function RadioSection() {
  const [size, setSize] = useState('medium')

  const selectedLabel = OPTIONS.find((option) => option.value === size)?.label

  return (
    <SectionContainer
      id="radio"
      title="Radio"
      description="여러 옵션 중 하나만 선택할 수 있는 라디오 버튼입니다. 선택한 옵션이 아래에 표시됩니다."
    >
      <Stack spacing={2}>
        <FormControl>
          <FormLabel id="size-radio-label">크기 선택</FormLabel>
          <RadioGroup
            aria-labelledby="size-radio-label"
            name="size"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          >
            {OPTIONS.map(({ value, label }) => (
              <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
            ))}
          </RadioGroup>
        </FormControl>

        <Typography variant="body2" color="text.secondary">
          선택된 옵션: {selectedLabel}
        </Typography>
      </Stack>
    </SectionContainer>
  )
}
