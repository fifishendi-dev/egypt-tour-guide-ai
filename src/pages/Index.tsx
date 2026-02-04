import PresentationNav from "@/components/presentation/PresentationNav";
import TitleSlide from "@/components/presentation/TitleSlide";
import TeamSlide from "@/components/presentation/TeamSlide";
import TableOfContents from "@/components/presentation/TableOfContents";
import ProjectDescriptionSlide from "@/components/presentation/ProjectDescriptionSlide";
import AgileSlide from "@/components/presentation/AgileSlide";
import SprintsSlide from "@/components/presentation/SprintsSlide";
import ProjectPipelineSlide from "@/components/presentation/ProjectPipelineSlide";
import UseCaseSlide from "@/components/presentation/UseCaseSlide";
import ERDSchemaSlide from "@/components/presentation/ERDSchemaSlide";
import BackendSlide from "@/components/presentation/BackendSlide";
import MobileAppSlide from "@/components/presentation/MobileAppSlide";
import MobileUISlide from "@/components/presentation/MobileUISlide";
import WebPlatformSlide from "@/components/presentation/WebPlatformSlide";
import AISlide from "@/components/presentation/AISlide";
import WhisperSlide from "@/components/presentation/WhisperSlide";
import InterviewTopicsSlide from "@/components/presentation/InterviewTopicsSlide";
import PhiModelSlide from "@/components/presentation/PhiModelSlide";
import ProgressSlide from "@/components/presentation/ProgressSlide";
import ChallengesSlide from "@/components/presentation/ChallengesSlide";
import ConclusionSlide from "@/components/presentation/ConclusionSlide";
import ThankYouSlide from "@/components/presentation/ThankYouSlide";

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
      <AgileSlide />
      <SprintsSlide />
      <ProjectPipelineSlide />
      <UseCaseSlide />
      <ERDSchemaSlide />
      <BackendSlide />
      
      {/* 3. Technologies */}
      <MobileAppSlide />
      <MobileUISlide />
      <WebPlatformSlide />
      <AISlide />
      <WhisperSlide />
      <InterviewTopicsSlide />
      <PhiModelSlide />
      
      {/* 4. Progress */}
      <ProgressSlide />
      
      {/* 5. Conclusion */}
      <ChallengesSlide />
      <ConclusionSlide />
      <ThankYouSlide />
    </div>
  );
};

export default Index;
