import Banner from "./components/landing/Banner";
import ContactSection from "./components/landing/Contact";
import CTASection from "./components/landing/CTASection";
import FAQs from "./components/landing/FAQs";
import Hero from "./components/landing/Hero";
import LegalInsights from "./components/landing/LegalInsights";
import PracticeAreas from "./components/landing/PracticeAreas";
import ProfileHighlight from "./components/landing/ProfileHighlight";
import Testimonials from "./components/landing/Testimonials";
import WhyUsSection from "./components/landing/WhyUsSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <PracticeAreas />
      <Banner />
      <WhyUsSection />
      <ProfileHighlight />
      <LegalInsights />
      <Testimonials />
      <FAQs />
      <CTASection />
      <ContactSection />
    </main>
  );
}
