import PageLayout from '../components/common/page-layout.jsx';
import SectionCard from '../components/common/section-card.jsx';

/**
 * AboutPage 컴포넌트 - About Me 상세 페이지
 *
 * Example usage:
 * <AboutPage />
 */
function AboutPage() {
  return (
    <PageLayout maxWidth="md">
      <SectionCard
        label="ABOUT ME"
        title="About Me"
        description="About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다."
      />
    </PageLayout>
  );
}

export default AboutPage;
