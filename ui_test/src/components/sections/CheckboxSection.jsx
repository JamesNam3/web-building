import { useState } from 'react'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

const ITEMS = [
  { value: 'react', label: 'React' },
  { value: 'vite', label: 'Vite' },
  { value: 'mui', label: 'MUI' },
  { value: 'emotion', label: 'Emotion' },
]

export default function CheckboxSection() {
  const [checked, setChecked] = useState([])

  const allChecked = checked.length === ITEMS.length
  const someChecked = checked.length > 0 && !allChecked // 일부만 선택된 상태

  const handleToggleAll = (event) => {
    setChecked(event.target.checked ? ITEMS.map((item) => item.value) : [])
  }

  const handleToggle = (value) => (event) => {
    setChecked((prev) =>
      event.target.checked ? [...prev, value] : prev.filter((v) => v !== value),
    )
  }

  return (
    <SectionContainer
      id="checkbox"
      title="Checkbox"
      description="여러 항목을 선택할 수 있는 체크박스입니다. 전체 선택/해제와 선택 개수가 실시간으로 반영됩니다."
    >
      <Stack spacing={1}>
        <FormControlLabel
          label="전체 선택"
          control={
            <Checkbox checked={allChecked} indeterminate={someChecked} onChange={handleToggleAll} />
          }
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', pl: 3 }}>
          {ITEMS.map(({ value, label }) => (
            <FormControlLabel
              key={value}
              label={label}
              control={
                <Checkbox checked={checked.includes(value)} onChange={handleToggle(value)} />
              }
            />
          ))}
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ pt: 1 }}>
          선택된 항목: {checked.length} / {ITEMS.length}개
        </Typography>
      </Stack>
    </SectionContainer>
  )
}
