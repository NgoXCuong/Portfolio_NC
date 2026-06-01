import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Github, ExternalLink } from "lucide-react";

/* ─── Stack Chip ──────────────────────────────────────────────── */
export const StackChip = ({ label }) => (
  <span className="
    inline-block px-2 py-0.5 text-xs font-mono rounded
    bg-gray-100 text-gray-600 border border-gray-200
    dark:bg-white/8 dark:text-cyan-300/80 dark:border-white/10
    transition-colors duration-300
  ">
    {label}
  </span>
);

/* ─── Project Card ────────────────────────────────────────────── */
const ProjectCard = ({ project, index, onOpen }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
    >
      <div
        className="
          group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer h-full
          bg-white border border-gray-200 shadow-sm
          dark:bg-[#061432]/70 dark:border-white/8 dark:shadow-none
          hover:shadow-xl hover:-translate-y-1.5
          dark:hover:border-white/20 dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          transition-all duration-400
        "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onOpen(project)}
      >
        {/* Top gradient accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, ${project.accent.from}, ${project.accent.to})` }}
        />

        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="
            absolute inset-0
            bg-gradient-to-t from-white/90 via-white/20 to-transparent
            dark:from-[#061432]/85 dark:via-[#061432]/20 dark:to-transparent
          " />

          {/* Tag */}
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide"
            style={{
              background: project.tagDark.bg,
              border: `1px solid ${project.tagDark.border}`,
              color: project.tagDark.text,
            }}
          >
            <span className="dark:block hidden">{project.tag}</span>
            <span
              className="dark:hidden block"
              style={{
                background: project.tagLight.bg,
                border: `1px solid ${project.tagLight.border}`,
                color: project.tagLight.text,
                padding: "2px 10px",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {project.tag}
            </span>
          </div>

          {/* Commits badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/30 dark:bg-black/50 backdrop-blur-sm text-white text-xs font-mono">
            <Github className="w-3 h-3" />
            {project.commits} commits
          </div>

          {/* Icon */}
          <div
            className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-white"
            style={{ background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})` }}
          >
            {project.icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-5 gap-3">
          {/* Title */}
          <div>
            <p className="text-xs text-gray-400 dark:text-slate-500 font-mono tracking-wider mb-1">{project.type}</p>
            <h3 className="
              text-lg font-bold transition-colors duration-200
              text-gray-800 group-hover:text-transparent group-hover:bg-clip-text
              dark:text-slate-100
            "
              style={{
                backgroundImage: hovered
                  ? `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})`
                  : "none",
                WebkitBackgroundClip: hovered ? "text" : "unset",
                WebkitTextFillColor: hovered ? "transparent" : "unset",
              }}
            >
              {project.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{project.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed line-clamp-3 flex-1">
            {project.desc}
          </p>

          {/* Stack chips */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.stack.slice(0, 4).map((s) => (
              <StackChip key={s} label={s} />
            ))}
            {project.stack.length > 4 && (
              <span className="text-xs text-gray-400 dark:text-slate-500 self-center">+{project.stack.length - 4} more</span>
            )}
          </div>

          {/* Divider */}
          <div className="
            h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent
            dark:via-white/8
            group-hover:via-current transition-colors duration-300
          " />

          {/* Actions */}
          <div className="flex items-center justify-between">
            <button
              className="
                flex items-center gap-1.5 text-sm font-medium transition-colors duration-200
                text-gray-500 hover:text-gray-800
                dark:text-slate-400 dark:hover:text-cyan-300
              "
              onClick={(e) => { e.stopPropagation(); onOpen(project); }}
            >
              Xem chi tiết
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200
                dark:bg-white/6 dark:text-slate-300 dark:hover:bg-white/12 dark:border-white/10
              "
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
