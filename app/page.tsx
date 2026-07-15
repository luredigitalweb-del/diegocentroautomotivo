import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { About } from "@/components/sections/about";
import { Differentials } from "@/components/sections/differentials";
import { Certifications } from "@/components/sections/certifications";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Instagram } from "@/components/sections/instagram";
import { Location } from "@/components/sections/location";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionTransition } from "@/components/section-transition";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <SectionTransition from="black" to="white" className="h-24 lg:h-32" />
        <HowItWorks />
        <SectionTransition from="white" to="gray" className="h-14 lg:h-20" />
        <Services />
        <SectionTransition from="gray" to="white" className="h-14 lg:h-20" />
        <About />
        <SectionTransition from="white" to="red" />
        <Certifications />
        <SectionTransition from="red" to="white" />
        <Differentials />
        <SectionTransition from="white" to="red" />
        <Gallery />
        <SectionTransition from="red" to="white" />
        <Location />
        <SectionTransition from="white" to="black" className="h-24 lg:h-32" />
        <Instagram />
        <SectionTransition from="black" to="white" className="h-24 lg:h-32" />
        <Testimonials />
        <SectionTransition from="white" to="black" className="h-24 lg:h-32" />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
