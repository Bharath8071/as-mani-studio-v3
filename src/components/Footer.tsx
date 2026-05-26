import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-display text-2xl font-semibold text-white leading-none">AS Mani</p>
              <p className="text-[10px] font-body font-medium tracking-[0.22em] uppercase text-gold-500 mt-0.5">Studio</p>
            </div>
            <p className="font-body text-sm leading-relaxed mb-6 text-stone-400">
              Capturing life's most sacred moments — weddings, ceremonies, and celebrations across Tamil Nadu.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs font-medium tracking-[0.18em] uppercase text-stone-500 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="font-body text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs font-medium tracking-[0.18em] uppercase text-stone-500 mb-5">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Wedding Photography',
                'Engagement Shoots',
                'Thottil Ceremony',
                'Manjal Neerattu Vizha',
                'Birthday Photography',
                'Special Events',
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="font-body text-sm hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-medium tracking-[0.18em] uppercase text-stone-500 mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-gold-500" />
                <span className="font-body text-sm leading-snug">Coimbatore, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="flex-shrink-0 text-gold-500" />
                <span className="font-body text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="flex-shrink-0 text-gold-500" />
                <a href="mailto:hello@asmanistudio.com" className="font-body text-sm hover:text-white transition-colors">
                  hello@asmanistudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-stone-600">
            © {new Date().getFullYear()} AS Mani Studio. All rights reserved.
          </p>
          <p className="font-body text-xs text-stone-600 italic">
            "Capturing Life's Most Sacred Moments"
          </p>
        </div>
      </div>
    </footer>
  );
}
