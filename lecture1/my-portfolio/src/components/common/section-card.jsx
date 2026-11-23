import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/**
 * SectionCard 컴포넌트 - 섹션 역할을 보여주는 카드
 *
 * Props:
 * @param {string} label - 섹션 번호/라벨 (예: '01 · HERO') [Required]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 설명 문구 [Required]
 * @param {boolean} isHighlighted - 브랜드 그라데이션 배경 사용 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <SectionCard label="01" title="Hero" description="설명" isHighlighted />
 */
function SectionCard({ label, title, description, isHighlighted = false }) {
  return (
    <Card
      component="section"
      elevation={0}
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: isHighlighted ? 'transparent' : 'var(--color-border-subtle)',
        background: isHighlighted ? 'var(--gradient-header)' : 'var(--color-bg-secondary)',
        color: isHighlighted ? 'var(--color-text-on-primary)' : 'var(--color-text-primary)',
      }}
    >
      <CardContent sx={{ textAlign: 'center', py: { xs: 4, md: 8 }, px: { xs: 2, md: 6 } }}>
        <Box
          sx={{
            display: 'inline-block',
            mb: 2,
            px: 1.5,
            py: 0.5,
            borderRadius: 10,
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: 1,
            backgroundColor: isHighlighted ? 'rgba(255,255,255,0.2)' : 'var(--color-primary)',
            color: 'var(--color-text-on-primary)',
          }}
        >
          { label }
        </Box>
        <Box
          component="h2"
          sx={{
            m: 0,
            mb: 2,
            fontSize: { xs: '1.6rem', md: '2.2rem' },
            lineHeight: 1.3,
            color: isHighlighted ? 'var(--color-text-on-primary)' : 'var(--color-link)',
          }}
        >
          { title }
        </Box>
        <Box
          component="p"
          sx={{
            m: 0,
            mx: 'auto',
            maxWidth: 640,
            fontSize: { xs: '1rem', md: '1.15rem' },
            lineHeight: 1.6,
            color: isHighlighted ? 'var(--color-text-on-primary)' : 'var(--color-text-secondary)',
          }}
        >
          { description }
        </Box>
      </CardContent>
    </Card>
  );
}

export default SectionCard;
