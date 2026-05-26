import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { projects } from '../data/projects';

const categories = ['All', 'Wedding', 'Engagement', 'Thottil', 'Manjal Neerattu Vizha', 'Birthday', 'Special Event'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-100 pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-xs text-stone-400 mb-6">
            <a href="/" className="hover:text-gold-500 transition-colors">Home</a>
            <span className="mx-2">›</span>
            <span>Portfolio</span>
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-stone-900 leading-tight mb-4">
            Our Portfolio
          </h1>
          <p className="font-body text-stone-500 text-lg max-w-xl">
            A collection of sacred moments we've had the honour to capture.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-section-xl bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs font-medium tracking-wide px-4 py-2 transition-colors ${
                  activeCategory === cat
                    ? 'bg-stone-900 text-white'
                    : 'border border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="break-inside-avoid mb-5"
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="block group relative overflow-hidden"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                      i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-[4/3]' : 'aspect-square'
                    }`}
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/60 transition-all duration-400 flex flex-col items-start justify-end p-5 opacity-0 group-hover:opacity-100">
                    <p className="text-xs font-body tracking-[0.18em] uppercase text-gold-400 mb-1">
                      {project.category}
                    </p>
                    <h3 className="font-display text-white text-xl font-medium leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-stone-300 text-xs font-body mt-1">
                      {project.location} · {project.date}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-body text-stone-400 py-20">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
