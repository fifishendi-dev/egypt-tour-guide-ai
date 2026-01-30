import PresentationNav from "@/components/presentation/PresentationNav";
import TitleSlide from "@/components/presentation/TitleSlide";
import TeamSlide from "@/components/presentation/TeamSlide";
import TableOfContents from "@/components/presentation/TableOfContents";
import ProjectDescriptionSlide from "@/components/presentation/ProjectDescriptionSlide";
import MotivationSlide from "@/components/presentation/MotivationSlide";
import MethodologySlide from "@/components/presentation/MethodologySlide";
import ProjectPipelineSlide from "@/components/presentation/ProjectPipelineSlide";
import UseCaseSlide from "@/components/presentation/UseCaseSlide";
import FunctionalRequirementsSlide from "@/components/presentation/FunctionalRequirementsSlide";
import MobileAppSlide from "@/components/presentation/MobileAppSlide";
import WebPlatformSlide from "@/components/presentation/WebPlatformSlide";
import BackendSlide from "@/components/presentation/BackendSlide";
import AISlide from "@/components/presentation/AISlide";
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
      <MotivationSlide />
      <MethodologySlide />
      <ProjectPipelineSlide />
      <UseCaseSlide />
      <FunctionalRequirementsSlide />
      <MobileAppSlide />
      <WebPlatformSlide />
      <BackendSlide />
      <AISlide />
      <ProgressSlide />
      <DemoSlide />
      <ConclusionSlide />
    </div>
  );
};

export default Index;
