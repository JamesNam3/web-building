import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from './components/common/header.jsx';
import AboutPage from './pages/about-page.jsx';
import HomePage from './pages/home-page.jsx';
import ProjectsPage from './pages/projects-page.jsx';

/**
 * App 컴포넌트 - 라우팅과 공통 레이아웃
 */
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/projects" element={ <ProjectsPage /> } />
      </Routes>
    </Box>
  );
}

export default App;
