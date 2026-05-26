import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

interface Testimonial {
  text: string;
  client: string;
  eventType?: string;
}

interface TestimonialsGridProps {
  label: string;
  title: string;
  testimonials: Testimonial[];
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TestimonialsGrid({
  label,
  title,
  testimonials,
}: TestimonialsGridProps) {
  return (
    <motion.section
      className="py-section-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-600">
            {title}
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white border-l-4 border-gold-500 p-8 hover:shadow-md transition-shadow"
              variants={item}
            >
              <p className="font-display italic text-lg text-stone-800 mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-body font-600 text-stone-900">
                  {testimonial.client}
                </p>
                {testimonial.eventType && (
                  <p className="font-body text-sm text-stone-500">
                    {testimonial.eventType}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}