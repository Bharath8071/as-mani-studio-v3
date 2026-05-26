import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomScrollbar } from './components/CustomScrollbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { PortfolioItem } from './pages/PortfolioItem';
import { Contact } from './pages/Contact';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919XXXXXXXXX?text=Hi%20AS%20Mani%20Studio%2C%20I%27d%20like%20to%20enquire%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white flex items-center gap-2 px-4 py-3 shadow-lg hover:bg-[#1ebe5d] transition-all duration-300 md:bottom-8 md:right-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="font-body text-sm font-medium hidden sm:inline">Chat with us</span>
    </a>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <CustomScrollbar />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioItem />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="pt-40 pb-40 text-center max-w-7xl mx-auto px-6">
                <p className="text-xs font-body font-medium tracking-[0.2em] text-gold-500 uppercase mb-4">404</p>
                <h1 className="font-display text-5xl font-semibold text-stone-900 mb-5">
                  Page Not Found
                </h1>
                <p className="font-body text-stone-500 mb-8 max-w-md mx-auto">
                  The page you're looking for doesn't exist. Let's get you back on track.
                </p>
                <Link
                  to="/"
                  className="bg-stone-900 text-white px-7 py-3.5 font-body font-medium text-sm hover:bg-stone-700 transition-colors inline-block"
                >
                  Back to Home
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
