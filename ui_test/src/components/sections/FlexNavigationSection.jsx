import Box from '@mui/material/Box'
import { SectionContainer } from '../ui'

const MENUS = ['홈', '소개', '상품', '연락처', '설정']

export default function FlexNavigationSection() {
  return (
    <SectionContainer
      id="flex-navigation"
      title="Flex Navigation"
      description="flexbox(justify-content: space-between)로 로고와 메뉴를 양 끝에 정렬한 네비게이션입니다. 메뉴에 마우스를 올리면 흰색으로 바뀝니다."
    >
      {/* 큰 네비게이션 박스 */}
      <Box
        component="nav"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '60px',
          px: { xs: 2, md: 3 },
          bgcolor: '#2d3748',
          borderRadius: 1,
        }}
      >
        {/* 로고 박스 */}
        <Box sx={{ color: '#fff', fontWeight: 700, fontSize: '20px' }}>
          MyWebsite
        </Box>

        {/* 메뉴들 박스 */}
        <Box component="ul" sx={{ display: 'flex', gap: '15px', m: 0, p: 0, listStyle: 'none' }}>
          {MENUS.map((name) => (
            <Box
              key={name}
              component="li"
              sx={{
                color: '#cbd5e0',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                '&:hover': { color: '#fff' },
              }}
            >
              {name}
            </Box>
          ))}
        </Box>
      </Box>
    </SectionContainer>
  )
}
