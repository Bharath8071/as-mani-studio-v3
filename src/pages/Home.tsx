import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Camera, Heart, Baby, Sparkles, Cake, Users } from 'lucide-react';
import { CinematicHero } from '../components/CinematicHero';
import { PreviousWorksCarousel } from '../components/PreviousWorksCarousel';
import { SectionLabel } from '../components/SectionLabel';
import { TestimonialsGrid } from '../components/TestimonialsGrid';

// ─── DATA ──────────────────────────────────────────────────────────────────────

const services = [
  { icon: Camera,   name: 'Wedding Photography',  desc: 'Thirumanam moments, forever' },
  { icon: Heart,    name: 'Engagement Shoots',     desc: 'The beginning of your love story' },
  { icon: Baby,     name: 'Thottil Ceremony',      desc: "Baby's first sacred celebration" },
  { icon: Sparkles, name: 'Manjal Neerattu Vizha', desc: "A daughter's most sacred transition" },
  { icon: Cake,     name: 'Birthday Photography',  desc: 'Vibrant, joyful, personal' },
  { icon: Users,    name: 'Special Events',        desc: 'No occasion too big or small' },
];

// More images for the collage gallery
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80' },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80' },
  { src: 'https://images.unsplash.com/photo-1670529775607-e92672ebebb7?q=80&w=686' },
  { src: 'https://images.unsplash.com/photo-1563808599481-34a342e44508?q=80&w=687' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80' },
  { src: 'https://images.unsplash.com/photo-1721677156275-99bb64adb36d?q=80&w=1074' },
  { src: 'https://images.unsplash.com/photo-1670529775607-e92672ebebb7?q=80&w=686' },
  { src: 'https://images.unsplash.com/photo-1698802060842-412d2963f897?q=80&w=1170'},
  { src: 'https://images.unsplash.com/photo-1751429114275-c5c552587527?q=80&w=686' },
];

const testimonials = [
  { text: 'AS Mani Studio captured our wedding so beautifully. Every photo tells a story.', client: 'Priya & Karthik', eventType: 'Wedding' },
  { text: 'The Thottil ceremony photos are priceless. We cry happy tears every time we see them.', client: 'Meena', eventType: 'Baby Naming' },
  { text: 'Professional, warm, and incredibly talented. Our Manjal function looked like a film.', client: 'Sowmya', eventType: 'Maturity Function' },
];

// ─── FADE-UP WRAPPER ───────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.72, ease: [0.33, 1, 0.68, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── PARALLAX IMAGE ────────────────────────────────────────────────────────────

function ParallaxImage({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover scale-110"
        style={{ y }}
      />
    </div>
  );
}

// ─── COLLAGE GALLERY ITEM — parallax + scattered rotation ─────────────────────

function CollageItem({
  src,
  index,
  height,
  rotate,
}: {
  src: string;
  index: number;
  height: string;
  rotate: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // odd cols go up, even cols go down — creates scatter depth
  const yRange = index % 2 === 0
    ? ['4%', '-4%']
    : ['-4%', '4%'];
  const y     = useTransform(scrollYProgress, [0, 1], yRange);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.97]);

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden group cursor-pointer"
      style={{
        y,
        scale,
        rotate,          // slight static rotation — collage/shuffle feel
        height,
      }}
      whileHover={{ scale: 1.03, rotate: 0, transition: { duration: 0.4 } }}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500" />
    </motion.div>
  );
}

// ─── HOME PAGE ─────────────────────────────────────────────────────────────────

export function Home() {
  const whatsappUrl = 'https://wa.me/91XXXXXXXXXX?text=Hi%20AS%20Mani%20Studio%2C%20I%27d%20like%20to%20enquire%20about%20your%20services';

  // Collage layout config: height + subtle rotation for each image
  const collageConfig = [
    { height: '260px', rotate: -1.5 },
    { height: '340px', rotate:  1.2 },
    { height: '220px', rotate: -0.8 },
    { height: '300px', rotate:  1.8 },
    { height: '360px', rotate: -1.2 },
    { height: '240px', rotate:  0.9 },
    { height: '280px', rotate: -1.8 },
    { height: '320px', rotate:  1.4 },
    { height: '250px', rotate: -0.6 },
    { height: '300px', rotate:  1.0 },
    { height: '280px', rotate: -1.3 },
    { height: '320px', rotate:  1.1 },
  ];

  return (
    <main>
      {/* ── 1. CINEMATIC HERO ── */}
      <CinematicHero />

      {/* ── CURVED RISING CARD ── */}
      <div
        className="relative z-10 bg-cream overflow-hidden"
        style={{
          borderRadius: '25px 25px 0 0',
          marginTop: '-20px',
          boxShadow: '0 -12px 48px rgba(32,30,28,0.18)',
        }}
      >

        <PreviousWorksCarousel />

        {/* ── 2. SERVICES — old icon-on-top style ── */}
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="text-center mb-16">
              <SectionLabel>WHAT WE DO</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-600 text-stone-900 leading-tight mt-1">
                Every Moment Has a Story
              </h2>
            </FadeUp>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    className="bg-white border border-stone-200 p-8 hover:border-gold-400 transition-colors duration-300 cursor-default"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <Icon className="w-8 h-8 text-gold-500 mb-5" strokeWidth={1.5} />
                    <h3 className="font-display text-xl font-600 text-stone-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="font-body text-sm text-stone-500 italic">
                      {service.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <FadeUp delay={0.3} className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-1 font-body text-sm font-600 text-gold-500 hover:text-gold-600 transition-colors duration-300"
              >
                See All Services →
              </Link>
            </FadeUp>
          </div>
        </section>

        {/* ── 3. HOW IT WORKS ── */}
        {/* <section className="py-20 px-6 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="text-center mb-20">
              <SectionLabel>THE PROCESS</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-600 text-stone-900 mt-1">
                Simple. Personal. Memorable.
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 relative">
              <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              {steps.map((step, i) => (
                <FadeUp key={i} delay={i * 0.12} className="text-center relative">
                  <div className="w-16 h-16 rounded-full border border-gold-400 flex items-center justify-center mx-auto mb-6 bg-cream relative z-10">
                    <span className="font-display text-lg font-600 text-gold-500">{step.num}</span>
                  </div>
                  <h3 className="font-display text-xl font-600 text-stone-900 mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-stone-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </section> */}

        {/* ── 4. GALLERY — collage/shuffle with parallax ── */}
        <section className="py-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-16">
              <FadeUp>
                <div className="flex flex-col items-center text-center">
                   <SectionLabel>OUR WORK</SectionLabel>

                   <h2 className="font-display text-4xl md:text-5xl font-600 text-stone-900 leading-tight mt-1 text-center">
                     A Glimpse Into<br />
                     <span className="italic text-gold-500">Our World</span>
                   </h2>
                </div> 
              </FadeUp>
            </div>

            {/* Collage — 4 uneven columns, images have slight rotation + parallax */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-start">
              {/* Col 1 */}
              <div className="flex flex-col gap-3 mt-8">
                <CollageItem src={galleryImages[0].src} index={0} height={collageConfig[0].height} rotate={collageConfig[0].rotate} />
                <CollageItem src={galleryImages[1].src} index={1} height={collageConfig[1].height} rotate={collageConfig[1].rotate} />
                <CollageItem src={galleryImages[2].src} index={2} height={collageConfig[2].height} rotate={collageConfig[2].rotate} />
              </div>
              {/* Col 2 — offset down */}
              <div className="flex flex-col gap-3 mt-0">
                <CollageItem src={galleryImages[3].src} index={3} height={collageConfig[3].height} rotate={collageConfig[3].rotate} />
                <CollageItem src={galleryImages[4].src} index={4} height={collageConfig[4].height} rotate={collageConfig[4].rotate} />
                <CollageItem src={galleryImages[5].src} index={5} height={collageConfig[5].height} rotate={collageConfig[5].rotate} />
              </div>
              {/* Col 3 — offset up */}
              <div className="flex flex-col gap-3 mt-12">
                <CollageItem src={galleryImages[6].src} index={6} height={collageConfig[6].height} rotate={collageConfig[6].rotate} />
                <CollageItem src={galleryImages[7].src} index={7} height={collageConfig[7].height} rotate={collageConfig[7].rotate} />
                <CollageItem src={galleryImages[8].src} index={8} height={collageConfig[8].height} rotate={collageConfig[8].rotate} />
              </div>
              {/* Col 4 */}
              <div className="flex flex-col gap-3 mt-4">
                <CollageItem src={galleryImages[9].src} index={9} height={collageConfig[9].height} rotate={collageConfig[9].rotate} />
                <CollageItem src={galleryImages[10].src} index={10} height={collageConfig[10].height} rotate={collageConfig[10].rotate} />
                <CollageItem src={galleryImages[11].src} index={11} height={collageConfig[11].height} rotate={collageConfig[11].rotate} />
              </div>
            </div>

            <FadeUp delay={0.2} className="text-center mt-14">
              <Link
                to="/portfolio"
                className="bg-stone-900 text-white px-8 py-3 font-body font-600 text-sm inline-block hover:bg-stone-700 transition-colors duration-300"
              >
                View Full Portfolio
              </Link>
            </FadeUp>
          </div>
        </section>

        {/* ── 5. STUDIO STATEMENT ── */}
        <section className="relative overflow-hidden">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1170"
            className="h-[420px] md:h-[520px]"
          />
          <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center px-6">
            <FadeUp className="text-center max-w-3xl">
              <p className="font-display italic text-2xl md:text-4xl text-white leading-relaxed">
                "We don't just take photos.<br />
                <span className="text-gold-400">We preserve what time would otherwise take away."</span>
              </p>
              <p className="font-body text-sm text-stone-300 mt-5 tracking-[0.15em] uppercase">
                — AS Mani Studio, Coimbatore
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── 6. TESTIMONIALS ── */}
        <TestimonialsGrid
          label="KIND WORDS"
          title="What Our Families Say"
          testimonials={testimonials}
        />

        {/* ── 7. CTA ── */}
        <section className="bg-stone-900 py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <SectionLabel>LET'S CREATE TOGETHER</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-600 text-white mt-2 mb-5 leading-tight">
                Ready to Capture<br />
                <span className="italic text-gold-400">Your Special Day?</span>
              </h2>
              <p className="font-body text-stone-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Reach out to us — we'd love to be part of your celebration.
              </p>
            </FadeUp>
            <FadeUp delay={0.15} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gold-500 text-stone-900 px-9 py-4 font-body font-600 text-sm hover:bg-gold-400 transition-colors duration-300"
              >
                Book a Session
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-9 py-4 font-body font-600 text-sm hover:bg-[#1da851] transition-colors duration-300 flex items-center gap-2"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
            </FadeUp>
          </div>
        </section>

      </div>
    </main>
  );
}
