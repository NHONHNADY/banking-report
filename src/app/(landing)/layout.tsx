import { Navbar2 } from "@/components/layout/nvarbar2";
import FooterSection from "@/components/layout/section/footer-section";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar2 />
      <section>{children}</section>
      <FooterSection />
    </div>
  );
}
