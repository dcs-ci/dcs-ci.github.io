import { ConferenceLayout } from "@/components/layout/ConferenceLayout";
import { HeroSection } from "@/components/conference/HeroSection";
import { OverviewSection } from "@/components/conference/OverviewSection";
import { KeyThemesSection } from "@/components/conference/KeyThemesSection";
import { ImportantDatesSection } from "@/components/conference/ImportantDatesSection";

const Index = () => {
  return (
    <ConferenceLayout>
      <HeroSection />
      <OverviewSection />
      <KeyThemesSection />
      <ImportantDatesSection />
    </ConferenceLayout>
  );
};

export default Index;
