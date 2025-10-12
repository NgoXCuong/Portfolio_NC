import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cat1 from "../assets/cat1.jpeg";
import catHover from "../assets/cat2.jpeg";
import cat3 from "../assets/cat3.jpeg";
import bookIcon from "../assets/closed-book.svg";
import css3 from "../assets/CSS3.svg";
import html5 from "../assets/HTML5.svg";
import cSharp from "../assets/CSharp.svg";
import express from "../assets/Express.svg";
import java from "../assets/Java.svg";
import javaScript from "../assets/JavaScript.svg";
import mongodb from "../assets/MongoDB.svg";
import node from "../assets/NodeJs.svg";
import mySQL from "../assets/MySQL.svg";
import postman from "../assets/Postman.svg";
import react from "../assets/React.svg";
import tailwind from "../assets/TailwindCSS.svg";
import vite from "../assets/ViteJs.svg";

const techSkills = {
  frontend: [
    { name: "React", icon: react },
    { name: "Vite", icon: vite },
    { name: "JavaScript", icon: javaScript },
    { name: "HTML5", icon: html5 },
    { name: "CSS3", icon: css3 },
    { name: "TailwindCSS", icon: tailwind },
  ],
  backend: [
    { name: "Node.js", icon: node },
    { name: "Express", icon: express },
    { name: "MySQL", icon: mySQL },
    { name: "MongoDB", icon: mongodb },
    { name: "Postman", icon: postman },
    { name: "Java", icon: java },
    { name: "CSharp", icon: cSharp },
  ],
};

const softSkills = [
  "Giao Tiếp Chuyên Nghiệp",
  "Đáng Tin Cậy",
  "Quản Lý Thời Gian Hiệu Quả",
  "Ham Học Hỏi",
];

const SkillSection = () => {
  const [hoverCat1, setHoverCat1] = useState(false);
  const [hoverCat3, setHoverCat3] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="skills"
      className="relative flex items-center justify-center
    h-auto  md:min-h-screen text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-20 mt-20 sm:mt-5">
        {/* Tiêu đề */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Kỹ Năng & Chuyên Môn
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Là một nhà phát triển web mới vào nghề, mình có nền tảng vững chắc
            về ReactJS, Node.js và ExpressJS, cùng niềm đam mê xây dựng giao
            diện hiện đại.
          </p>
        </div>

        {/* Lưới nội dung */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {/* Cat trái */}
          <div className="rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition-transform duration-500">
            <img
              src={hoverCat1 ? catHover : cat1}
              alt="cat1"
              className="w-full h-full object-cover rounded-xl hover:opacity-95 transition-opacity"
            />
          </div>

          {/* Tech Skills */}
          <div className="col-span-2 bg-white/40 dark:bg-gray-800/40 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 backdrop-blur-sm overflow-hidden">
            <h3 className="text-xl font-bold mb-3">⚙️ Công cụ & Công nghệ</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Thành thạo các công cụ hiện đại giúp xây dựng ứng dụng web nhanh,
              linh hoạt và tối ưu trải nghiệm người dùng.
            </p>

            {/* Fade edges */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 w-12 sm:w-20 h-full bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10" />
              <div className="absolute right-0 top-0 w-12 sm:w-20 h-full bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10" />

              {/* Frontend */}
              <motion.div
                className="flex gap-10 sm:gap-14 md:gap-20 mb-4 rounded-xl p-2"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              >
                {techSkills.frontend.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform whitespace-nowrap"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    {skill.name}
                  </div>
                ))}
              </motion.div>

              {/* Backend */}
              <motion.div
                className="flex gap-10 sm:gap-14 md:gap-20 rounded-xl p-2"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {techSkills.backend.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform whitespace-nowrap"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    {skill.name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="col-span-2 bg-white/40 dark:bg-gray-800/40 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3">
              💡 Kỹ Năng Mềm & Phát Triển Bản Thân
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
              Mình đề cao tinh thần học hỏi, khả năng giao tiếp, hợp tác và giải
              quyết vấn đề trong môi trường làm việc năng động.
            </p>

            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 justify-items-center p-2 overflow-hidden">
              {softSkills.map((skill, i) => {
                const randomY = isMobile
                  ? Math.random() * 2
                  : Math.random() * 1; // desktop nhún rất nhỏ
                const randomX = isMobile
                  ? Math.random() * 1.5
                  : Math.random() * 1;
                return (
                  <motion.div
                    key={i}
                    className="mt-2 relative flex items-center justify-center bg-slate-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-200 px-3 py-2 rounded-lg text-xs sm:text-sm border border-slate-200 dark:border-gray-600 shadow-sm select-none transition-colors duration-300 max-w-max"
                    animate={{
                      y: [0, -randomY, 0, randomY, 0],
                      x: [0, randomX, 0, -randomX, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 2,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <img
                      src={bookIcon}
                      alt="Book"
                      className="absolute -top-1 -right-1 w-5 h-5 opacity-50 pointer-events-none"
                    />
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Cat phải */}
          <div className="rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition-transform duration-500 flex justify-center items-center">
            <img
              src={hoverCat3 ? catHover : cat3}
              alt="cat3"
              className="w-full h-full object-cover hover:opacity-95 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
