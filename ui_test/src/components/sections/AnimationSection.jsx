import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SectionContainer } from '../ui'
import '../../styles/animation.css'

const CSS_EFFECTS = [
  { id: 'bounce', label: 'Bounce' },
  { id: 'shake', label: 'Shake' },
  { id: 'spin', label: 'Spin' },
]

// 데모에 공통으로 쓰는 박스
function DemoBox({ children, color = 'primary.main' }) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 120,
        height: 80,
        display: 'grid',
        placeItems: 'center',
        bgcolor: color,
        color: 'common.white',
        fontWeight: 700,
      }}
    >
      {children}
    </Paper>
  )
}

// 각 데모를 같은 모양의 블록으로 감쌉니다.
function DemoBlock({ title, description, controls, contentRef, children }) {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'keep-all' }}>
          {description}
        </Typography>
      </Box>
      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {controls}
      </Stack>
      <Box ref={contentRef} sx={{ minHeight: 112, p: 2, overflow: 'hidden' }}>
        {children}
      </Box>
    </Stack>
  )
}

export default function AnimationSection() {
  const [fadeIn, setFadeIn] = useState(true)
  const [growIn, setGrowIn] = useState(true)
  const [slideIn, setSlideIn] = useState(true)
  const [slideDirection, setSlideDirection] = useState('left')
  // Slide가 움직일 범위(데모 영역). 콜백 ref + state로 렌더링 시점에 요소를 전달합니다.
  const [slideContainer, setSlideContainer] = useState(null)
  const [combinedIn, setCombinedIn] = useState(true)

  // CSS 애니메이션: key를 바꿔 요소를 새로 만들면 클릭할 때마다 처음부터 다시 재생됩니다.
  const [cssEffect, setCssEffect] = useState({ id: 'bounce', count: 0 })

  const playCss = (id) => setCssEffect((prev) => ({ id, count: prev.count + 1 }))

  return (
    <SectionContainer
      id="animation"
      title="Animation"
      description="MUI의 Fade, Grow, Slide 트랜지션과 CSS 애니메이션(keyframes)을 버튼으로 재생해 볼 수 있습니다."
    >
      <Stack spacing={4}>
        <DemoBlock
          title="Fade"
          description="투명도가 서서히 바뀌며 나타나고 사라집니다."
          controls={
            <Button variant="outlined" onClick={() => setFadeIn((prev) => !prev)}>
              {fadeIn ? '숨기기' : '보이기'}
            </Button>
          }
        >
          <Fade in={fadeIn} timeout={600}>
            <Box sx={{ width: 'fit-content' }}>
              <DemoBox>Fade</DemoBox>
            </Box>
          </Fade>
        </DemoBlock>

        <DemoBlock
          title="Grow"
          description="크기와 투명도가 함께 커지며 나타납니다."
          controls={
            <Button variant="outlined" onClick={() => setGrowIn((prev) => !prev)}>
              {growIn ? '숨기기' : '보이기'}
            </Button>
          }
        >
          <Grow in={growIn} timeout={600}>
            <Box sx={{ width: 'fit-content' }}>
              <DemoBox color="secondary.main">Grow</DemoBox>
            </Box>
          </Grow>
        </DemoBlock>

        <DemoBlock
          title="Slide"
          description="지정한 방향에서 미끄러지듯 나타납니다. 방향을 고른 뒤 다시 재생해 보세요."
          contentRef={setSlideContainer}
          controls={
            <>
              <Button variant="outlined" onClick={() => setSlideIn((prev) => !prev)}>
                {slideIn ? '숨기기' : '보이기'}
              </Button>
              {['left', 'right', 'up', 'down'].map((direction) => (
                <Button
                  key={direction}
                  size="small"
                  variant={slideDirection === direction ? 'contained' : 'text'}
                  onClick={() => setSlideDirection(direction)}
                >
                  {direction}
                </Button>
              ))}
            </>
          }
        >
          {/* Slide는 container 안에서만 움직이도록 해서 카드 밖으로 튀어나오지 않게 합니다. */}
          <Slide in={slideIn} direction={slideDirection} container={slideContainer} timeout={500}>
            <Box sx={{ width: 'fit-content' }}>
              <DemoBox color="success.main">Slide</DemoBox>
            </Box>
          </Slide>
        </DemoBlock>

        <DemoBlock
          title="CSS 애니메이션"
          description="@keyframes로 만든 애니메이션입니다. 버튼을 누를 때마다 처음부터 다시 재생됩니다."
          controls={CSS_EFFECTS.map(({ id, label }) => (
            <Button key={id} variant="contained" color="warning" onClick={() => playCss(id)}>
              {label}
            </Button>
          ))}
        >
          <Box key={cssEffect.count} className={`anim-${cssEffect.id}`} sx={{ width: 'fit-content' }}>
            <DemoBox color="warning.main">{cssEffect.id}</DemoBox>
          </Box>
        </DemoBlock>

        <DemoBlock
          title="MUI 트랜지션 + CSS 애니메이션 조합"
          description="Grow 트랜지션으로 나타난 뒤, 안쪽 요소에 CSS pulse 애니메이션이 계속 반복됩니다."
          controls={
            <Button variant="outlined" color="error" onClick={() => setCombinedIn((prev) => !prev)}>
              {combinedIn ? '숨기기' : '보이기'}
            </Button>
          }
        >
          <Grow in={combinedIn} timeout={700}>
            <Box sx={{ width: 'fit-content' }}>
              <Box className="anim-pulse">
                <DemoBox color="error.main">Grow + Pulse</DemoBox>
              </Box>
            </Box>
          </Grow>
        </DemoBlock>
      </Stack>
    </SectionContainer>
  )
}
