import { useState } from 'react'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

// 구간 표시: 0부터 100까지 25 단위
const MARKS = [
  { value: 0, label: '0' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' },
]

export default function SliderSection() {
  const [value, setValue] = useState(30)

  return (
    <SectionContainer
      id="slider"
      title="Slider"
      description="0부터 100까지 조절하는 슬라이더입니다. 현재 값이 실시간으로 표시됩니다."
    >
      <Stack spacing={2}>
        {/*양 끝 label이 잘리지 않도록 좌우 여백을 줍니다. */}
        <Stack sx={{ px: 2 }}>
          <Slider
            aria-label="값 조절"
            value={value}
            onChange={(_event, newValue) => setValue(newValue)}
            min={0}
            max={100}
            step={1}
            marks={MARKS}
            valueLabelDisplay="auto"
          />
        </Stack>

        <Typography variant="body2" color="text.secondary">
          현재 값: <strong>{value}</strong>
        </Typography>
      </Stack>
    </SectionContainer>
  )
}
