import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import GRADIENTS from '../../styles/gradients'
import { SectionContainer } from '../ui'

// 외부 이미지 없이도 동작하도록 그라데이션으로 이미지 영역을 대신합니다.
const CARDS = [
  {
    id: 'react',
    title: 'React',
    description: '사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.',
    gradient: GRADIENTS[0],
  },
  {
    id: 'vite',
    title: 'Vite',
    description: '빠른 개발 서버와 가벼운 빌드를 제공하는 프런트엔드 도구입니다.',
    gradient: GRADIENTS[1],
  },
  {
    id: 'mui',
    title: 'MUI',
    description: 'Material Design을 따르는 React UI 컴포넌트 라이브러리입니다.',
    gradient: GRADIENTS[2],
  },
]

export default function CardSection() {
  return (
    <SectionContainer
      id="card"
      title="Card"
      description="Card, CardMedia, CardContent, CardActions로 구성한 카드를 Grid로 배치했습니다. 카드에 마우스를 올리면 그림자가 커집니다."
    >
      <Grid container spacing={3}>
        {CARDS.map(({ id, title, description, gradient }) => (
          <Grid key={id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s, transform 0.3s',
                '&:hover': { boxShadow: 8, transform: 'translateY(-4px)' },
              }}
            >
              <CardMedia
                component="div"
                role="img"
                aria-label={`${title} 이미지`}
                sx={{ height: 140, background: gradient }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'keep-all' }}>
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">자세히 보기</Button>
                <Button size="small" color="secondary">
                  공유
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  )
}
