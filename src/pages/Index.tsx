import PresentationNav from "@/components/presentation/PresentationNav";
import TitleSlide from "@/components/presentation/TitleSlide";
import TeamSlide from "@/components/presentation/TeamSlide";
import TableOfContents from "@/components/presentation/TableOfContents";
import ProjectDescriptionSlide from "@/components/presentation/ProjectDescriptionSlide";
import MethodologySlide from "@/components/presentation/MethodologySlide";
import ProjectPipelineSlide from "@/components/presentation/ProjectPipelineSlide";
import UseCaseSlide from "@/components/presentation/UseCaseSlide";
import ERDSchemaSlide from "@/components/presentation/ERDSchemaSlide";
import FunctionalRequirementsSlide from "@/components/presentation/FunctionalRequirementsSlide";
import MobileAppSlide from "@/components/presentation/MobileAppSlide";
import MobileUISlide from "@/components/presentation/MobileUISlide";
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
      
      {/* Title & Team */}
      <TitleSlide />
      <TeamSlide />
      <TableOfContents />
      
      {/* 1. Project Description */}
      <ProjectDescriptionSlide />
      
      {/* 2. Functional Requirements */}
      <MethodologySlide />
      <ProjectPipelineSlide />
      <UseCaseSlide />
      <ERDSchemaSlide />
      <FunctionalRequirementsSlide />
      
      {/* 3. Technologies */}
      <MobileAppSlide />
      <MobileUISlide />
      <WebPlatformSlide />
      <BackendSlide />
      <AISlide />
      
      {/* 4. Progress */}
      <ProgressSlide />
      
      {/* 5. Conclusion */}
      <DemoSlide />
      <ConclusionSlide />
    </div>
  );
};

export default Index;
