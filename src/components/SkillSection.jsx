"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import cat1 from "../assets/cat1.jpeg";
import catHover from "../assets/cat2.jpeg";
import cat3 from "../assets/cat3.jpeg";
import { techSkills, softSkills } from "../data/skillsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillSection = () => {
  const [hoverCat1, setHoverCat1] = useState(false);
  const [hoverCat3, setHoverCat3] = useState(false);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-purple-400/5 dark:bg-purple-500/6 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-cyan-400/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="section-label justify-center mb-4">KỸ NĂNG & CHUYÊN MÔN</div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="heading-gradient">Stack & Công Nghệ</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
            Có kinh nghiệm thực hành phát triển ứng dụng web bằng{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-medium">
              ReactJS
            </span>
            ,{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              Node.js
            </span>{" "}
            và{" "}
            <span className="text-pink-600 dark:text-pink-400 font-medium">
              ExpressJS
            </span>{" "}
            thông qua các dự án cá nhân và học tập.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {/* Cat left */}
          <motion.div variants={itemVariants}>
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer group h-56 sm:h-64
                border border-gray-200 dark:border-cyan-400/15
                shadow-sm dark:shadow-none
                hover:shadow-md transition-all duration-300"
              onMouseEnter={() => setHoverCat1(true)}
              onMouseLeave={() => setHoverCat1(false)}
            >
              <img src={(hoverCat1 ? catHover : cat1).src || (hoverCat1 ? catHover : cat1)} alt="cat"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs text-white font-medium tracking-widest uppercase opacity-90">
                Keep coding 🐱
              </div>
              <div className="corner-bracket tl" /><div className="corner-bracket tr" />
              <div className="corner-bracket bl" /><div className="corner-bracket br" />
            </div>
          </motion.div>

          {/* Tech Skills */}
          <motion.div variants={itemVariants} className="col-span-2">
            <div className="glass-card rounded-2xl p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100">⚙️ Công Cụ & Công Nghệ</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-slate-400 mb-5 leading-relaxed">
                Thành thạo các công cụ hiện đại giúp xây dựng ứng dụng web nhanh, linh hoạt và tối ưu trải nghiệm người dùng.
              </p>

              <div className="relative overflow-hidden rounded-xl">
                {/* Fade edges — adaptive */}
                <div className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none
                  bg-gradient-to-r from-white dark:from-[#061432] to-transparent" />
                <div className="absolute right-0 top-0 h-full w-10 z-10 pointer-events-none
                  bg-gradient-to-l from-white dark:from-[#061432] to-transparent" />

                {/* Frontend row */}
                <div className="marquee-wrapper mb-3">
                  <div className="marquee-track marquee-forward gap-5">
                    {techSkills.frontend.map((skill, i) => (
                      <div key={i} className="skill-badge">
                        <img src={skill.icon.src || skill.icon} alt={skill.name} className="w-4 h-4" />
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend row */}
                <div className="marquee-wrapper">
                  <div className="marquee-track marquee-backward gap-5">
                    {techSkills.backend.map((skill, i) => (
                      <div key={i} className="skill-badge"
                        style={{
                          background: "rgba(168,85,247,0.07)",
                          borderColor: "rgba(168,85,247,0.25)",
                          color: "#9333ea",
                        }}
                      >
                        <img src={skill.icon.src || skill.icon} alt={skill.name} className="w-4 h-4" />
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Database & Tool row */}
                <div className="marquee-wrapper mt-3">
                  <div className="marquee-track marquee-forward gap-5">
                    {techSkills.database_tool.map((skill, i) => (
                      <div key={i} className="skill-badge"
                        style={{
                          background: "rgba(16,185,129,0.07)",
                          borderColor: "rgba(16,185,129,0.25)",
                          color: "#10b981",
                        }}
                      >
                        <img src={skill.icon.src || skill.icon} alt={skill.name} className="w-4 h-4" />
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="col-span-2">
            <div className="glass-card rounded-2xl p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100">💡 Kỹ Năng Mềm</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-slate-400 mb-5 leading-relaxed">
                Tinh thần học hỏi, khả năng giao tiếp và hợp tác tốt trong môi trường năng động.
              </p>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <motion.div
                    key={i} className="soft-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{skill.emoji}</span>
                    {skill.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cat right */}
          <motion.div variants={itemVariants}>
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer group h-56 sm:h-64
                border border-gray-200 dark:border-purple-400/18
                shadow-sm dark:shadow-none
                hover:shadow-md transition-all duration-300"
              onMouseEnter={() => setHoverCat3(true)}
              onMouseLeave={() => setHoverCat3(false)}
            >
              <img src={(hoverCat3 ? catHover : cat3).src || (hoverCat3 ? catHover : cat3)} alt="cat"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs text-white font-medium tracking-widest uppercase opacity-90">
                Debug mode 🐾
              </div>
              <div className="corner-bracket tl" style={{ borderColor: "rgba(168,85,247,0.5)" }} />
              <div className="corner-bracket tr" style={{ borderColor: "rgba(168,85,247,0.5)" }} />
              <div className="corner-bracket bl" style={{ borderColor: "rgba(168,85,247,0.5)" }} />
              <div className="corner-bracket br" style={{ borderColor: "rgba(168,85,247,0.5)" }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
