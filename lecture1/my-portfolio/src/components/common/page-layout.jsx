import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

/**
 * PageLayout 컴포넌트 - 반응형 중앙정렬 페이지 래퍼
 *
 * Props:
 * @param {node} children - 페이지 내용 [Required]
 * @param {string} maxWidth - Container 최대 너비 (sm | md | lg | xl) [Optional, 기본값: 'md']
 *
 * Example usage:
 * <PageLayout maxWidth="md">...</PageLayout>
 */
function PageLayout({ children, maxWidth = 'md' }) {
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 2, md: 4 },
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      <Container maxWidth={ maxWidth } sx={{ py: 4, px: { xs: 2, md: 3 } }}>
        { children }
      </Container>
    </Box>
  );
}

export default PageLayout;
