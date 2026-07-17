"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

/* ─── Detail Modal ────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal */}
        <motion.div
          className="
            relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl
            bg-white border border-gray-200 shadow-2xl
            dark:bg-[#070f2b] dark:border-white/12
          "
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Top gradient bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
            style={{ background: `linear-gradient(90deg, ${project.accent.from}, ${project.accent.to})` }}
          />

          {/* Header image */}
          <div className="relative h-52 overflow-hidden rounded-t-2xl">
            <img src={project.image.src || project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent dark:from-[#070f2b] dark:via-[#070f2b]/40" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center
                bg-white/80 hover:bg-white text-gray-700 border border-gray-200 shadow
                dark:bg-white/10 dark:hover:bg-white/20 dark:text-slate-200 dark:border-white/20
                transition-all duration-200
              "
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon & title overlay */}
            <div className="absolute bottom-4 left-5 flex items-end gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})` }}
              >
                {project.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400">{project.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-6">
            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              {project.longDesc}
            </p>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-slate-200 mb-3 uppercase tracking-wider">
                ✨ Tính năng nổi bật
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f, i) => (
                  <li
                    key={i}
                    className="
                      flex items-start gap-2 text-sm
                      text-gray-600 dark:text-slate-400
                      bg-gray-50 dark:bg-white/4
                      border border-gray-100 dark:border-white/6
                      rounded-lg px-3 py-2
                    "
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-slate-200 mb-3 uppercase tracking-wider">
                🛠️ Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="
                      px-3 py-1 rounded-lg text-xs font-mono font-medium
                      bg-gray-100 text-gray-700 border border-gray-200
                      dark:bg-white/8 dark:text-cyan-300 dark:border-white/12
                    "
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                  text-sm font-semibold transition-all duration-200
                  bg-gray-900 hover:bg-gray-800 text-white
                  dark:bg-white/8 dark:hover:bg-white/15 dark:text-slate-200 dark:border dark:border-white/12
                "
              >
                <Github className="w-4 h-4" />
                Xem trên GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{ background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})` }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
