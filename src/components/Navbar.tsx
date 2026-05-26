import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsScrolled(currentY > 10);

      if (currentY > 80) {
        if (currentY > lastY.current) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const forceWhite = !isHome || isScrolled;

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          forceWhite ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span
              className={`font-display text-2xl font-semibold transition-colors duration-300 ${
                forceWhite ? 'text-stone-900' : 'text-white'
              }`}
            >
              AS Mani
            </span>
            <span className="text-[10px] font-body font-medium tracking-[0.22em] uppercase text-gold-500 -mt-0.5">
              Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body text-sm font-medium relative pb-1 transition-colors duration-300 group ${
                    forceWhite
                      ? isActive ? 'text-stone-900' : 'text-stone-600 hover:text-stone-900'
                      : isActive ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-gold-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-block bg-stone-900 text-white text-sm font-body font-medium px-5 py-2.5 hover:bg-stone-700 transition-colors duration-300"
            >
              Book a Session
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-1 transition-colors ${
                forceWhite ? 'text-stone-900' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white shadow-lg border-t border-stone-100 md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`font-body text-base font-medium ${
                      isActive ? 'text-gold-500' : 'text-stone-700 hover:text-stone-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="bg-stone-900 text-white text-sm font-body font-medium px-5 py-3 text-center hover:bg-stone-700 transition-colors mt-2"
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}