import PresentationNav from "@/components/presentation/PresentationNav";
import TitleSlide from "@/components/presentation/TitleSlide";
import TeamSlide from "@/components/presentation/TeamSlide";
import TableOfContents from "@/components/presentation/TableOfContents";
import ProjectDescriptionSlide from "@/components/presentation/ProjectDescriptionSlide";
import FunctionalRequirementsSlide from "@/components/presentation/FunctionalRequirementsSlide";
import TechnologiesSlide from "@/components/presentation/TechnologiesSlide";
import ProgressSlide from "@/components/presentation/ProgressSlide";
import DemoSlide from "@/components/presentation/DemoSlide";
import ConclusionSlide from "@/components/presentation/ConclusionSlide";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PresentationNav />
      
      {/* Add top anchor for navigation */}
      <div id="top" />
      
      <TitleSlide />
      <TeamSlide />
      <TableOfContents />
      <ProjectDescriptionSlide />
      <FunctionalRequirementsSlide />
      <TechnologiesSlide />
      <ProgressSlide />
      <DemoSlide />
      <ConclusionSlide />
    </div>
  );
};

export default Index;
