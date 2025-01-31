import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Image } from 'lucide-react';
import FsLightbox from 'fslightbox-react';

interface ProjectCardProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    images: string[];
    tags: string[];
    link: string | null;
    level: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative overflow-hidden group">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={24} className="mr-2" />
              View Project
            </a>
          ) : (
            <button
              onClick={() => setLightboxOpen(!lightboxOpen)}
              className="text-white flex items-center hover:text-blue-400 transition-colors"
            >
              <Image size={24} className="mr-2" />
              View Images
            </button>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className="text-sm text-blue-600 font-medium">{project.subtitle}</span>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">{project.level}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <FsLightbox
        toggler={lightboxOpen}
        sources={project.images}
        key={project.images.join('')}
      />
    </motion.div>
  );
};

export default ProjectCard;