import Stack from '@mui/material/Stack';
import PageLayout from '../components/common/page-layout.jsx';
import SectionCard from '../components/common/section-card.jsx';

/** Home 페이지를 구성하는 5개 섹션 데이터 */
const SECTIONS = [
  {
    label: '01 · HERO',
    title: 'Hero',
    description: '여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.',
    isHighlighted: true,
  },
  {
    label: '02 · ABOUT ME',
    title: 'About Me',
    description: "여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.",
  },
  {
    label: '03 · SKILL TREE',
    title: 'Skill Tree',
    description: '여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.',
  },
  {
    label: '04 · PROJECTS',
    title: 'Projects',
    description: "여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.",
  },
  {
    label: '05 · CONTACT',
    title: 'Contact',
    description: '여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.',
  },
];

/**
 * HomePage 컴포넌트 - 5개 섹션으로 구성된 메인 페이지
 *
 * Example usage:
 * <HomePage />
 */
function HomePage() {
  return (
    <PageLayout maxWidth="md">
      <Stack spacing={{ xs: 2, md: 3 }}>
        {SECTIONS.map((section) => (
          <SectionCard key={ section.title } { ...section } />
        ))}
      </Stack>
    </PageLayout>
  );
}

export default HomePage;
