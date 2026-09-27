import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Investments } from './components/Investments';
import { MissionVision } from './components/MissionVision';
import { About } from './components/About';
import { Compare } from './components/Compare';
import { Security } from './components/Security';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

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
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
