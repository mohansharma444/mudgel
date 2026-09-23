import Hero from '../components/Hero';
import QuickHighlights from '../components/QuickHighlights';
import About from '../components/About';
import Services from '../components/Services';
import Techniques from '../components/Techniques';
import HomePhysiotherapy from '../components/HomePhysiotherapy';
import Conditions from '../components/Conditions';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Packages from '../components/Packages';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <QuickHighlights />
      <About />
      <Services />
      <Techniques />
      <HomePhysiotherapy />
      <Conditions />
      <WhyChooseUs />
      <HowItWorks />
      <Packages />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
}
