import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Github } from "lucide-react";
import { projects } from "../data/projectsData";
import ProjectCard from "./projects/ProjectCard";
import ProjectModal from "./projects/ProjectModal";

const ProjectsSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-cyan-400/5 dark:bg-cyan-400/5 blur-[130px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-500/6 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-20">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label justify-center mb-4">DỰ ÁN CÁ NHÂN</div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="heading-gradient">Những Gì Tôi Đã Xây Dựng</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Những dự án thực tế được xây dựng với đam mê và tinh thần cầu tiến,
            luôn học hỏi và cải thiện không ngừng.
            <span className="text-cyan-600 dark:text-cyan-400 font-medium"> Click để xem chi tiết</span>.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />
          ))}
        </div>

        {/* View more */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/NgoXCuong"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200
              border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400
              dark:border-white/15 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300 dark:hover:bg-cyan-400/5
            "
          >
            <Github className="w-4 h-4" />
            Xem tất cả trên GitHub
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default ProjectsSection;
