import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { CTABanner } from '../components/CTABanner';

export function PortfolioItem() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    return (
      <div className="pt-40 pb-40 text-center max-w-7xl mx-auto px-6">
        <h1 className="font-display text-4xl text-stone-900 mb-4">Project Not Found</h1>
        <Link to="/portfolio" className="text-gold-500 font-body font-medium hover:text-gold-600 transition-colors">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  const related = projects.filter((p) => p.id !== id).slice(0, 3);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex flex-col justify-end pb-12 overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-stone-900/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="font-body text-xs text-white/60 mb-5">
            <Link to="/portfolio" className="hover:text-gold-400 transition-colors">Portfolio</Link>
            <span className="mx-2">›</span>
            <span>{project.title}</span>
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-body tracking-[0.2em] uppercase text-gold-400 mb-3">{project.category}</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white leading-tight mb-3">
              {project.title}
            </h1>
            <p className="font-body text-white/70 text-sm">
              {project.location} · {project.date}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-section-xl bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="break-inside-avoid mb-4 overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img}
                  alt={`${project.title} — photo ${i + 1}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                    i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-[4/3]' : 'aspect-square'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-section-xl bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-3xl font-semibold text-stone-900 mb-5">About This Shoot</h3>
              <p className="font-body text-stone-600 leading-relaxed text-lg">{project.description}</p>
              {project.testimonial && (
                <blockquote className="mt-8 border-l-2 border-gold-400 pl-6 py-2">
                  <p className="font-display italic text-stone-700 text-lg leading-relaxed mb-4">
                    "{project.testimonial.text}"
                  </p>
                  <p className="font-body font-medium text-stone-900 text-sm">{project.testimonial.client}</p>
                </blockquote>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src={project.images[1] || project.coverImage}
                alt={`${project.title} featured`}
                loading="lazy"
                className="w-full object-cover aspect-[4/5]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-section-xl bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-display text-3xl font-semibold text-stone-900 mb-10">You May Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={project.images.map((src) => ({ src }))}
      />
    </>
  );
}
