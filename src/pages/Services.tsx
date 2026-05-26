import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
// import { TestimonialsGrid } from '../components/TestimonialsGrid';
import { CTABanner } from '../components/CTABanner';

const services = [
  {
    num: '01',
    title: 'Wedding Photography & Videography',
    category: 'Thirumanam',
    desc: 'Thirumanam is not just a ceremony — it is the beginning of a new life. We capture every ritual, every emotion, every stolen glance with precision and love.',
    features: ['Candid + traditional coverage', 'Drone aerial shots', 'Cinematic wedding film', 'Same-day highlights reel'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  },
  {
    num: '02',
    title: 'Engagement Shoots',
    category: 'The Promise Before the Promise',
    desc: 'Romantic, relaxed, and completely yours. We create a safe, comfortable space where your chemistry shines naturally.',
    features: ['Outdoor & indoor shoots', 'Couple portrait sessions', 'Golden hour photography', 'Edited digital album'],
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
  },
  {
    num: '03',
    title: 'Thottil Ceremony (Baby Naming)',
    category: 'First Sacred Celebration',
    desc: "Your baby's first public celebration deserves to be remembered in every detail — from the tiny hands to the grandparents' proud tears.",
    features: ['Ritual documentation', 'Family portrait sessions', 'Emotional candid moments', 'Quick photo turnaround'],
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80',
  },
  {
    num: '04',
    title: 'Manjal Neerattu Vizha',
    category: "A Daughter's Sacred Transition",
    desc: "Full of colour, family, and tradition — we document this milestone with the cultural respect and visual beauty it truly deserves.",
    features: ['Complete event coverage', 'Portrait sessions', 'Family group photography', 'Traditional ritual documentation'],
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
  },
  {
    num: '05',
    title: 'Birthday Photography',
    category: 'Vibrant Celebrations',
    desc: 'From first birthdays to milestone celebrations — vibrant, personal, and joyful. Every candle, every smile, every surprise captured.',
    features: ['Themed setup photography', 'Candid party moments', 'Cake smash (for babies)', 'Family portrait sets'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    num: '06',
    title: 'Special Events',
    category: 'Every Occasion Matters',
    desc: 'Housewarming (Gruhapravesam), corporate events, school functions — we cover it all with the same professionalism and care.',
    features: ['Flexible packages', 'Quick delivery timelines', 'Professional full team', 'Any scale of event'],
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
  },
];

const packages = [
  {
    name: 'Basic',
    price: '₹ On Request',
    desc: 'Perfect for intimate ceremonies',
    features: ['1 Photographer', '4 Hours Coverage', '100+ Edited Photos', 'Digital Delivery'],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '₹ On Request',
    desc: 'Our most popular package',
    features: ['2 Photographers', 'Full Day Coverage', '300+ Edited Photos', 'Highlight Film', 'Printed Album'],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '₹ On Request',
    desc: 'The complete experience',
    features: ['3-Person Team', 'Multi-Day Coverage', '500+ Edited Photos', 'Cinematic Film', 'Premium Album', 'Drone Footage'],
    highlight: false,
  },
];

export function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-100 pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-xs text-stone-400 mb-6">
            <a href="/" className="hover:text-gold-500 transition-colors">Home</a>
            <span className="mx-2">›</span>
            <span>Services</span>
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-stone-900 leading-tight mb-4">
            Our Services
          </h1>
          <p className="font-body text-stone-500 text-lg max-w-xl">
            Photography & videography for every sacred occasion.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.num}
          className={`py-section-xl ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className={i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}
              >
                <div className="overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
                className={i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}
              >
                <p className="font-display text-5xl font-semibold text-gold-400/50 mb-2">{service.num}</p>
                <SectionLabel>{service.category}</SectionLabel>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-5">
                  {service.title}
                </h2>
                <p className="font-body text-stone-600 leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-body text-stone-700 text-sm">
                      <Check size={15} className="text-gold-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="font-body text-gold-500 hover:text-gold-600 text-sm font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  Enquire for this service <ChevronRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Packages */}
      <section className="py-section-xl bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 leading-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="font-body text-stone-500 mt-4 max-w-lg mx-auto">
              Every event is unique — contact us for a custom quote tailored to your celebration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 ${
                  pkg.highlight
                    ? 'bg-stone-900 text-white'
                    : 'bg-white border border-stone-200'
                }`}
              >
                {pkg.highlight && (
                  <p className="text-xs font-body font-medium tracking-[0.18em] uppercase text-gold-400 mb-4">
                    Most Popular
                  </p>
                )}
                <h3 className={`font-display text-2xl font-semibold mb-1 ${pkg.highlight ? 'text-white' : 'text-stone-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`font-body text-sm mb-6 ${pkg.highlight ? 'text-stone-400' : 'text-stone-500'}`}>
                  {pkg.desc}
                </p>
                <p className={`font-display text-xl font-medium mb-8 ${pkg.highlight ? 'text-gold-400' : 'text-gold-500'}`}>
                  {pkg.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 font-body text-sm ${pkg.highlight ? 'text-stone-300' : 'text-stone-600'}`}>
                      <Check size={14} className={pkg.highlight ? 'text-gold-400' : 'text-gold-500'} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 font-body font-medium text-sm transition-colors ${
                    pkg.highlight
                      ? 'bg-gold-500 text-white hover:bg-gold-600'
                      : 'border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
                  }`}
                >
                  Get a Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <TestimonialsGrid /> */}
      <CTABanner />
    </>
  );
}
