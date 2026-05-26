import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How early should I book?",
    answer: "We recommend booking at least 2–3 months in advance for weddings and major ceremonies. For smaller events, 4–6 weeks usually works. Popular dates fill quickly — the earlier, the better.",
  },
  {
    question: "Do you travel outside Coimbatore?",
    answer: "Yes, we cover all of Tamil Nadu and can travel Pan-India for destination weddings and special events. Travel and accommodation costs are discussed transparently during your consultation.",
  },
  {
    question: "How long until we receive our photos?",
    answer: "Professionally edited photos are delivered within 2–3 weeks of the event. Cinematic films are delivered within 4–6 weeks. We never rush quality.",
  },
  {
    question: "Do you shoot both photo and video?",
    answer: "Yes, we offer combined photo + video packages for all events. Having one team handle both ensures complete visual storytelling of your day.",
  },
  {
    question: "What is your payment process?",
    answer: "We require a booking advance to confirm your date, with the balance due on the event day. Full pricing and payment terms are shared during your initial consultation.",
  },
  {
    question: "Can we meet before booking?",
    answer: "Absolutely — we strongly encourage a free consultation before you commit. It helps us understand your vision and ensures we are the right fit for your celebration.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-stone-50 py-section-xl">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 leading-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="divide-y divide-stone-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4 group"
              >
                <span className="font-body font-medium text-stone-900 text-base md:text-lg group-hover:text-gold-500 transition-colors">
                  {faq.question}
                </span>
                <span className="text-gold-500 flex-shrink-0">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-stone-600 leading-relaxed pt-3 pb-1 text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
