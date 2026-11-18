import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import GRADIENTS from '../../styles/gradients'
import { SectionContainer } from '../ui'

// 외부 이미지 없이도 동작하도록 그라데이션으로 이미지를 대신합니다.
// 실제 이미지를 쓰려면 background 대신 <img>를 넣으면 됩니다.
const SLIDES = [
  { id: 1, title: '첫 번째 슬라이드', gradient: GRADIENTS[0] },
  { id: 2, title: '두 번째 슬라이드', gradient: GRADIENTS[1] },
  { id: 3, title: '세 번째 슬라이드', gradient: GRADIENTS[2] },
  { id: 4, title: '네 번째 슬라이드', gradient: GRADIENTS[3] },
]

export default function SwipeSection() {
  const [index, setIndex] = useState(0)
  const [lastGesture, setLastGesture] = useState('')

  const last = SLIDES.length - 1

  // 처음/끝에서는 더 이동하지 않습니다.
  const goPrev = () => setIndex((prev) => Math.max(prev - 1, 0))
  const goNext = () => setIndex((prev) => Math.min(prev + 1, last))

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setLastGesture('← 왼쪽 스와이프 (다음)')
      goNext()
    },
    onSwipedRight: () => {
      setLastGesture('→ 오른쪽 스와이프 (이전)')
      goPrev()
    },
    trackMouse: true, // 마우스 드래그도 스와이프로 인식
    preventScrollOnSwipe: true, // 가로 스와이프 중 페이지가 같이 스크롤되는 것을 막음
  })

  return (
    <SectionContainer
      id="swipe"
      title="Swipe"
      description="react-swipeable로 만든 슬라이드입니다. 터치 또는 마우스 드래그로 좌우로 넘기거나, 이전/다음 버튼을 사용하세요."
    >
      <Stack spacing={2}>
        {/* 슬라이드 영역: 스와이프 핸들러는 이 영역에만 연결합니다. */}
        <Box
          {...handlers}
          sx={{ overflow: 'hidden', borderRadius: 1, cursor: 'grab', userSelect: 'none', touchAction: 'pan-y' }}
        >
          <Box
            sx={{
              display: 'flex',
              transform: `translateX(-${index * 100}%)`,
              transition: 'transform 0.4s ease',
            }}
          >
            {SLIDES.map(({ id, title, gradient }) => (
              <Box
                key={id}
                role="group"
                aria-label={`${id} / ${SLIDES.length}`}
                sx={{
                  flex: '0 0 100%',
                  height: 220,
                  display: 'grid',
                  placeItems: 'center',
                  background: gradient,
                  color: 'common.white',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <IconButton aria-label="이전 슬라이드" onClick={goPrev} disabled={index === 0}>
            <ChevronLeftIcon />
          </IconButton>

          <Typography variant="body2" color="text.secondary">
            {index + 1} / {SLIDES.length}
          </Typography>

          <IconButton aria-label="다음 슬라이드" onClick={goNext} disabled={index === last}>
            <ChevronRightIcon />
          </IconButton>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          현재 인덱스: {index} / 마지막 제스처: {lastGesture || '(없음)'}
        </Typography>
      </Stack>
    </SectionContainer>
  )
}
