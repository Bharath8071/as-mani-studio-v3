import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTABanner() {
  return (
    <section className="bg-stone-900 py-section-xl">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
            Ready to Capture Your Special Day?
          </h2>
          <p className="text-stone-400 font-body text-lg mb-10 max-w-xl mx-auto">
            Reach out to us — we'd love to be part of your celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gold-500 text-white px-8 py-3.5 font-body font-medium tracking-wide hover:bg-gold-600 transition-all duration-300 inline-block"
            >
              Book a Session
            </Link>
            <a
              href="https://wa.me/919XXXXXXXXX?text=Hi%20AS%20Mani%20Studio%2C%20I%27d%20like%20to%20enquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-3.5 font-body font-medium flex items-center gap-2 hover:bg-[#1ebe5d] transition-all duration-300"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
