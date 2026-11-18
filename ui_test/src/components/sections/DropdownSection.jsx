import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

const OPTIONS = [
  { value: 'seoul', label: '서울' },
  { value: 'busan', label: '부산' },
  { value: 'daegu', label: '대구' },
  { value: 'incheon', label: '인천' },
  { value: 'gwangju', label: '광주' },
  { value: 'daejeon', label: '대전' },
]

export default function DropdownSection() {
  const [city, setCity] = useState('')

  const selectedLabel = OPTIONS.find((option) => option.value === city)?.label

  return (
    <SectionContainer
      id="dropdown"
      title="Dropdown"
      description="여러 옵션 중 하나를 선택하는 Select입니다. 선택한 값이 아래에 실시간으로 표시됩니다."
    >
      <Stack spacing={2}>
        <FormControl fullWidth>
          <InputLabel id="city-select-label">도시</InputLabel>
          <Select
            labelId="city-select-label"
            id="city-select"
            value={city}
            label="도시"
            onChange={(event) => setCity(event.target.value)}
          >
            {OPTIONS.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography variant="body2" color="text.secondary">
          선택된 값: {selectedLabel ? `${selectedLabel} (${city})` : '(없음)'}
        </Typography>
      </Stack>
    </SectionContainer>
  )
}
