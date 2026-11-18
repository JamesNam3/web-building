import ButtonBase from '@mui/material/ButtonBase'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import { SectionContainer } from '../ui'

// 모든 카드에 공통으로 적용되는 기본 모양
const baseSx = {
  width: '100%',
  height: 120,
  flexDirection: 'column',
  gap: 0.5,
  borderRadius: 1,
  border: 1,
  borderColor: 'divider',
  bgcolor: 'background.paper',
  transition: 'all 0.3s ease',
}

// 호버 효과 목록: 효과를 추가하려면 이 배열에 항목만 넣으면 됩니다.
const EFFECTS = [
  {
    id: 'color',
    title: '색상 변화',
    desc: '배경색과 글자색이 바뀝니다',
    hoverSx: { bgcolor: 'primary.main', color: 'primary.contrastText', borderColor: 'primary.main' },
  },
  {
    id: 'scale',
    title: '크기 확대',
    desc: '1.08배로 커집니다',
    hoverSx: { transform: 'scale(1.08)' },
  },
  {
    id: 'shadow',
    title: '그림자',
    desc: '그림자가 진하게 생깁니다',
    hoverSx: { boxShadow: 8 },
  },
  {
    id: 'lift',
    title: '떠오르기',
    desc: '위로 떠오르며 그림자가 생깁니다',
    hoverSx: { transform: 'translateY(-8px)', boxShadow: 6 },
  },
  {
    id: 'rotate',
    title: '회전',
    desc: '살짝 기울어집니다',
    hoverSx: { transform: 'rotate(-3deg) scale(1.03)', borderColor: 'secondary.main' },
  },
  {
    id: 'border',
    title: '테두리 강조',
    desc: '테두리와 글자색이 강조됩니다',
    hoverSx: { borderColor: 'error.main', color: 'error.main', boxShadow: (theme) => `0 0 0 3px ${alpha(theme.palette.error.main, 0.2)}` },
  },
]

export default function HoverSection() {
  return (
    <SectionContainer
      id="hover"
      title="Hover"
      description="카드에 마우스를 올리면 효과가 나타납니다. 키보드로 Tab 이동해 포커스해도 같은 효과를 볼 수 있습니다."
    >
      <Grid container spacing={3}>
        {EFFECTS.map(({ id, title, desc, hoverSx }) => (
          <Grid key={id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ButtonBase
              disableRipple
              sx={{
                ...baseSx,
                // 키보드 포커스에서도 같은 효과를 볼 수 있게 hover와 함께 지정합니다.
                '&:hover,&.Mui-focusVisible': hoverSx,
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'inherit' }}>
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'inherit', opacity: 0.8, wordBreak: 'keep-all' }}>
                {desc}
              </Typography>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  )
}
