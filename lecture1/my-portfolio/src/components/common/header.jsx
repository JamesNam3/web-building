import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';

/** 네비게이션 메뉴 정의 */
const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

/**
 * Header 컴포넌트 - 상단 로고와 3개 탭 네비게이션
 *
 * Example usage:
 * <Header />
 */
function Header() {
  const { pathname } = useLocation();
  const currentIndex = NAV_ITEMS.findIndex((item) => item.path === pathname);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: {
          xs: 'var(--color-primary-dark)',
          md: 'var(--gradient-header)',
        },
        color: 'var(--color-text-on-primary)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Toolbar
          disableGutters
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 0, sm: 2 },
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              py: { xs: 1, sm: 0 },
            }}
          >
            My Portfolio
          </Box>
          <Tabs
            value={currentIndex === -1 ? false : currentIndex}
            aria-label="메인 네비게이션"
            textColor="inherit"
            slotProps={{ indicator: { sx: { backgroundColor: '#FFFFFF', height: 3 } } }}
          >
            {NAV_ITEMS.map((item) => (
              <Tab
                key={ item.path }
                label={ item.label }
                component={ Link }
                to={ item.path }
                sx={{ color: 'var(--color-text-on-primary)', opacity: 0.85, '&.Mui-selected': { opacity: 1 } }}
              />
            ))}
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
