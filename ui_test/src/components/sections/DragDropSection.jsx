import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

const ZONES = [
  { id: 'todo', title: '할 일' },
  { id: 'done', title: '완료' },
]

const INITIAL_ITEMS = [
  { id: 1, label: 'React 프로젝트 만들기', zone: 'todo' },
  { id: 2, label: 'MUI 테마 설정하기', zone: 'todo' },
  { id: 3, label: '섹션 추가하기', zone: 'todo' },
  { id: 4, label: '빌드 확인하기', zone: 'todo' },
]

export default function DragDropSection() {
  const [items, setItems] = useState(INITIAL_ITEMS)
  const [draggingId, setDraggingId] = useState(null) // 드래그 중인 아이템
  const [overZone, setOverZone] = useState(null) // 아이템이 올라와 있는 드롭 영역

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData('text/plain', String(id))
    event.dataTransfer.effectAllowed = 'move'
    setDraggingId(id)
  }

  // 드래그가 끝나면(드롭 성공/취소 모두) 상태를 초기화합니다.
  const handleDragEnd = () => {
    setDraggingId(null)
    setOverZone(null)
  }

  // dragover에서 preventDefault()를 호출해야 drop이 허용됩니다.
  const handleDragOver = (event, zoneId) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    if (overZone !== zoneId) setOverZone(zoneId)
  }

  // 자식 요소로 이동할 때 발생하는 dragleave는 무시합니다.
  const handleDragLeave = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOverZone(null)
  }

  const handleDrop = (event, zoneId) => {
    event.preventDefault()
    const id = Number(event.dataTransfer.getData('text/plain'))
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, zone: zoneId } : item)))
    handleDragEnd()
  }

  return (
    <SectionContainer
      id="drag-drop"
      title="Drag & Drop"
      description="HTML5 Drag and Drop API로 만든 예제입니다. 아이템을 끌어서 다른 영역에 놓으면 이동합니다."
    >
      <Grid container spacing={3}>
        {ZONES.map((zone) => {
          const zoneItems = items.filter((item) => item.zone === zone.id)
          const isOver = overZone === zone.id

          return (
            <Grid key={zone.id} size={{ xs: 12, sm: 6 }}>
              <Paper
                variant="outlined"
                onDragOver={(event) => handleDragOver(event, zone.id)}
                onDragLeave={handleDragLeave}
                onDrop={(event) => handleDrop(event, zone.id)}
                sx={{
                  p: 2,
                  minHeight: 240,
                  borderStyle: 'dashed',
                  borderWidth: 2,
                  borderColor: isOver ? 'primary.main' : 'divider',
                  bgcolor: isOver ? 'action.hover' : 'background.paper',
                  transition: 'border-color 0.2s, background-color 0.2s',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                  {zone.title} ({zoneItems.length})
                </Typography>

                <Stack spacing={1}>
                  {zoneItems.map((item) => (
                    <Box
                      key={item.id}
                      draggable
                      onDragStart={(event) => handleDragStart(event, item.id)}
                      onDragEnd={handleDragEnd}
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        cursor: 'grab',
                        userSelect: 'none',
                        opacity: draggingId === item.id ? 0.4 : 1,
                        transition: 'opacity 0.2s',
                        '&:active': { cursor: 'grabbing' },
                      }}
                    >
                      {item.label}
                    </Box>
                  ))}

                  {zoneItems.length === 0 && (
                    <Typography variant="body2" color="text.secondary">
                      여기로 아이템을 끌어다 놓으세요
                    </Typography>
                  )}
                </Stack>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </SectionContainer>
  )
}
