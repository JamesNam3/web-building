import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

/**
 * 모든 섹션이 공통으로 사용하는 래퍼 컴포넌트입니다.
 * 제목/설명/내용 영역의 일관된 모양을 보장합니다.
 */
export default function SectionContainer({ id, title, description, children }) {
  return (
    <Paper
      component="section"
      id={id}
      className="section-block"
      variant="outlined"
      // 한글이 단어 중간에서 줄바꿈되지 않도록 모든 섹션에 keep-all을 적용합니다.
      sx={{ p: { xs: 2, md: 4 }, wordBreak: 'keep-all' }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
      )}
      <Box>{children}</Box>
    </Paper>
  )
}