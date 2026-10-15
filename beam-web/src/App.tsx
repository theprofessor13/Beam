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
import AboutBeam from './Pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Navbar />
        
        <Routes>
          {/* Main Landing Page */}
          <Route
            path="/"
            element={
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
            }
          />

          {/* Dedicated About Page */}
          <Route path="/about" element={<AboutBeam />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}