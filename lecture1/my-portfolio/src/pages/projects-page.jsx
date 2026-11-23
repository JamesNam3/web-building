import PageLayout from '../components/common/page-layout.jsx';
import SectionCard from '../components/common/section-card.jsx';

/**
 * ProjectsPage 컴포넌트 - Projects 상세 페이지
 *
 * Example usage:
 * <ProjectsPage />
 */
function ProjectsPage() {
  return (
    <PageLayout maxWidth="md">
      <SectionCard
        label="PROJECTS"
        title="Projects"
        description="Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다."
      />
    </PageLayout>
  );
}

export default ProjectsPage;
