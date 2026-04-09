import { AIMentorUI } from "@/components/AIMentorUI";
import { CoursesSection } from "@/components/CoursesSection";
import { Footer } from "@/components/Footer";
import { FutureCampus } from "@/components/FutureCampus";
import { GlobalClassroom } from "@/components/GlobalClassroom";
import { HeroSection } from "@/components/HeroSection";
import { IntelligenceDashboard } from "@/components/IntelligenceDashboard";

export default function Home() {
  return (
    <main className="relative z-10 pb-10">
      <HeroSection />
      <div className="space-y-10 px-6 md:px-10">
        <AIMentorUI />
        <FutureCampus />
        <IntelligenceDashboard />
        <GlobalClassroom />
        <CoursesSection />
      </div>
      <Footer />
    </main>
  );
}
