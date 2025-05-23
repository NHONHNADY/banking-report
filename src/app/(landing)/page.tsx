import { About } from "@/components/layout/section/about-section";
import FAQsection from "@/components/layout/section/faq-section";
import ContentSection from "@/components/layout/section/landing-section";
import { Team } from "@/components/layout/section/team-section";

export default function Page() {
  return (
    <>
      <ContentSection />
      <About />
      <Team />
      <FAQsection />
    </>
  );
}
