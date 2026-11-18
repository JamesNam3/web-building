import { useRef, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'

const SHOW_BUTTON_THRESHOLD = 100 // 이 값(px) 이상 스크롤하면 Top 버튼 표시
const ITEM_COUNT = 30

const ITEMS = Array.from({ length: ITEM_COUNT }, (_, i) => ({
  id: i + 1,
  title: `항목 ${i + 1}`,
  text: '스크롤 동작을 확인하기 위한 예시 콘텐츠입니다. 아래로 스크롤해 보세요.',
}))

export default function ScrollSection() {
  const scrollRef = useRef(null)
  const [scrollTop, setScrollTop] = useState(0)

  const showTopButton = scrollTop > SHOW_BUTTON_THRESHOLD

  const handleScrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <SectionContainer
      id="scroll"
      title="Scroll"
      description="높이 300px의 스크롤 영역입니다. 아래로 스크롤하면 오른쪽 아래에 Top 버튼이 나타납니다."
    >
      <Stack spacing={1}>
        {/*버튼이 스크롤 내용과 함께 움직이지 않도록 바깥 래퍼에 position: relative를 줍니다. */}
        <Box sx={{ position: 'relative' }}>
          <Paper
            ref={scrollRef}
            variant="outlined"
            onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
            sx={{ height: 300, overflowY: 'auto', p: 2 }}
          >
            <Stack spacing={2}>
              {ITEMS.map(({ id, title, text }) => (
                <Box key={id}>
                  <Typography variant="subtitle2">{title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'keep-all' }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>

          <Fade in={showTopButton}>
            <Fab
              size="small"
              color="primary"
              aria-label="맨 위로 이동"
              onClick={handleScrollToTop}
              sx={{ position: 'absolute', right: 24, bottom: 16 }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </Fade>
        </Box>

        <Typography variant="body2" color="text.secondary">
          현재 스크롤 위치: {Math.round(scrollTop)}px
        </Typography>
      </Stack>
    </SectionContainer>
  )
}
