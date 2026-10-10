import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { Investments } from './sections/Investments';
import { MissionVision } from './sections/MissionVision';
import { About } from './sections/About';
import { Compare } from './components/Compare';
import { Security } from './components/Security';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Footer } from './components/Footer';
import Testimonials from './sections/Testimonias';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Investments />
        <MissionVision />
        <About />
        <Compare />
        <Security />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
