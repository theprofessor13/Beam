import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import AboutBeam from './Pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';

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
           <Landing />
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