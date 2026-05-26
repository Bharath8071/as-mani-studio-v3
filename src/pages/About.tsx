import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Heart, Film, Users } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { TestimonialsGrid } from '../components/TestimonialsGrid';
import { CTABanner } from '../components/CTABanner';

const stats = [
  { value: '500+', label: 'Events Covered' },
  { value: '8+', label: 'Years Experience' },
  { value: '1000+', label: 'Happy Families' },
];

const team = [
  {
    name: 'Mani Selvan',
    role: 'Lead Photographer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  },
  {
    name: 'Arjun Kumar',
    role: 'Cinematographer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Preethi Devi',
    role: 'Photo Editor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
];

const features = [
  { icon: <Camera size={22} />, title: 'Attention to Detail', desc: 'Every frame composed with intention — nothing is left to chance.' },
  { icon: <Heart size={22} />, title: 'Cultural Sensitivity', desc: 'We understand Tamil ceremonies deeply — their meaning, rituals, and beauty.' },
  { icon: <Film size={22} />, title: 'Cinematic Quality', desc: 'Professional equipment and post-production that sets your story apart.' },
  { icon: <Users size={22} />, title: 'Personal & Warm Service', desc: 'We make you feel at ease so your authentic emotions shine through.' },
];

const aboutTestimonials = [
  { text: "They treated our family like their own. The patience and warmth they showed during our daughter's Manjal ceremony was extraordinary.", client: "Lakshmi Devi", eventType: "Manjal Neerattu Vizha" },
  { text: "We've used AS Mani Studio for three different family events now. The consistency and quality is unmatched in Coimbatore.", client: "Venkat & Family", eventType: "Multiple Events" },
  { text: "From the first call to the final delivery — professional, communicative, and passionate about their craft.", client: "Ranjani Mohan", eventType: "Wedding" },
];

export function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-100 pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-xs text-stone-400 mb-6">
            <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>About Us</span>
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-stone-900 leading-tight mb-4">
            About AS Mani Studio
          </h1>
          <p className="font-body text-stone-500 text-lg max-w-xl">
            Passionate storytellers, dedicated to your most sacred moments.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-section-xl bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80"
                  alt="AS Mani Studio photographer at work"
                  loading="lazy"
                  className="w-full object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 hidden md:block">
                  <p className="font-display text-3xl font-semibold">8+</p>
                  <p className="font-body text-xs tracking-wide uppercase mt-0.5">Years of Trust</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            >
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 leading-tight mb-8">
                We Don't Just Take Photos — We Preserve Memories
              </h2>
              <div className="space-y-5 text-stone-600 font-body leading-relaxed">
                <p>
                  AS Mani Studio was born out of a simple belief — that every family deserves to relive their most cherished moments exactly as they happened. What started as a passion for photography in Coimbatore has grown into one of Tamil Nadu's most trusted studios for weddings and cultural ceremonies.
                </p>
                <p>
                  We have a deep respect and love for Tamil cultural ceremonies. Whether it is the sacred rituals of a Thottil naming ceremony, the vibrant colours of a Manjal Neerattu Vizha, or the profound emotions of a Thirumanam wedding — we approach every event with the cultural understanding and reverence it deserves.
                </p>
                <p>
                  Our commitment is to quality, personal service, and making every client feel completely at ease. We become part of your celebration — and that trust is something we never take lightly.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-stone-100">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-semibold text-gold-500">{s.value}</p>
                    <p className="font-body text-stone-500 text-sm mt-1 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-section-xl bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <SectionLabel>The Team</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 leading-tight">
              The People Behind the Lens
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="overflow-hidden mb-5 group">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-display text-xl font-medium text-stone-900">{member.name}</h3>
                <p className="font-body text-sm text-gold-500 tracking-wide mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-section-xl bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 leading-tight">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-stone-200 p-8 hover:border-gold-400 transition-colors group"
              >
                <div className="text-gold-500 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-medium text-stone-900 mb-2">{f.title}</h3>
                <p className="font-body text-stone-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsGrid 
      label="KIND WORDS"
      title="What Our Families Say"
      testimonials={aboutTestimonials} />
      <CTABanner />
    </>
  );
}
