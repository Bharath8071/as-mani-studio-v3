import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="break-inside-avoid mb-6"
    >
      <Link to={`/portfolio/${project.id}`} className="block group overflow-hidden relative">
        <div className="overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/60 transition-all duration-400 flex flex-col items-start justify-end p-5 opacity-0 group-hover:opacity-100">
          <p className="text-xs font-body tracking-[0.18em] uppercase text-gold-400 mb-1">
            {project.category}
          </p>
          <h3 className="font-display text-white text-xl font-medium leading-snug">
            {project.title}
          </h3>
          <p className="text-stone-300 text-xs font-body mt-1">{project.location} · {project.date}</p>
        </div>
      </Link>
    </motion.div>
  );
}
