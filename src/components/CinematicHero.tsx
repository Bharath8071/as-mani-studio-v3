import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1170',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1800&q=85',
  'https://images.unsplash.com/photo-1547911139-c06c87da7115?q=80&w=1170',
  'https://images.unsplash.com/photo-1578013161233-99253c8e4caa?q=80&w=1170',
  'https://images.unsplash.com/photo-1708126755762-dbd72ed5e72a?q=80&w=1479',
];

// Word-by-word text reveal animation
function RevealText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <span className="inline">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.45,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + i * 0.04,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Image scales up as you scroll — Siena parallax effect
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  // Image moves up slower than scroll — parallax depth
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  // Overlay gets darker as you scroll
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.45, 0.75]);
  // Text fades out on scroll
  const textY = useTransform(scrollYProgress, [0, 0.4], ['0%', '-30%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Parallax image slider */}
      {HERO_IMAGES.map((src, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: index === 0 ? 1 : 0, scale: 1 }}
          
          animate={{
            opacity: current === index ? 1 : 0,
            scale: current === index ? 1.08 : 1,
          }}
          transition={{
            opacity: {
              duration: 1.2,
              ease: 'easeInOut',
            },
            scale: current === index
              ? { duration: 6, ease: 'linear' }
              : { duration: 0, delay: 1.2 }
          }}
        >
          <img
            src={src}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover "
          />
        </motion.div>
      ))}      

      {/* Dynamic Overlay */}
      <motion.div
        className="absolute inset-0 bg-stone-900"
        style={{ opacity: overlayOpacity }}
      />

      {/* Grain texture overlay for cinematic feel */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content Layer */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Location tag */}
        <motion.p
          className="text-[11px] font-body font-semibold tracking-[0.3em] text-gold-400 uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.7}}
        >
          Coimbatore · Tamil Nadu
        </motion.p>

        {/* Main headline — word by word reveal */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] mb-6 max-w-3xl">
          <RevealText text="Every Sacred" delay={0.8} />
          <br />
          <RevealText text="Moment," delay={0.8} />
          <br />
          <span className="italic text-gold-400">
            <RevealText text="Beautifully Preserved." delay={0.8} />
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          className="font-body text-base md:text-lg text-white/75 mb-10 max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7}}
        >
          Capturing Life's Most Sacred Moments — weddings, Thottil ceremonies,
          Manjal Neerattu Vizha, and every celebration in between.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.5 }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 font-body font-600 text-sm tracking-wide hover:bg-stone-100 transition-colors duration-300"
          >
            View Our Portfolio
            <span className="text-gold-500">→</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-white/60 text-white px-8 py-4 font-body font-600 text-sm tracking-wide hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Book a Session
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom service ticker */}
      {/* <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-stone-900/60 backdrop-blur-sm overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap py-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[
            'Wedding Photography',
            'Thottil Ceremony',
            'Manjal Neerattu Vizha',
            'Engagement Shoots',
            'Birthday Shoots',
            'Special Events',
            'Wedding Photography',
            'Thottil Ceremony',
            'Manjal Neerattu Vizha',
            'Engagement Shoots',
            'Birthday Shoots',
            'Special Events',
          ].map((text, i) => (
            <span
              key={i}
              className="font-body text-xs text-stone-300 font-500 tracking-[0.15em] uppercase"
            >
              {text}
              <span className="ml-12 text-gold-500">·</span>
            </span>
          ))}
        </motion.div>
      </div> */}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 right-8 md:right-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{ opacity: textOpacity }}
      >
        <span className="font-body text-[10px] text-white/50 tracking-[0.2em] uppercase rotate-90 mb-4">
          Scroll
        </span>
        <motion.div
          className="w-px h-16 bg-white/30"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </div>
  );
}
