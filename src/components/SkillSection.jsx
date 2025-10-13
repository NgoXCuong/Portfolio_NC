import React, { useState } from "react";
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
  "Giao Tiếp",
  "Hòa Đồng",
  "Đáng Tin Cậy",
  "Quản Lý Thời Gian",
  "Ham Học Hỏi",
];

const SkillSection = () => {
  const [hoverCat1, setHoverCat1] = useState(false);
  const [hoverCat3, setHoverCat3] = useState(false);

  return (
    <section
      id="skills"
      className="relative pb-12 text-gray-900 dark:text-white"
    >
      <div className="sm:h-screen relative z-10 container mx-auto px-6 md:px-20 mt-20 sm:mt-10">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-8">
            Kỹ Năng & Chuyên Môn
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Là một nhà phát triển web mới vào nghề, mình có nền tảng vững chắc
            về ReactJS, Node.js và ExpressJS, cùng niềm đam mê xây dựng giao
            diện hiện đại.
          </p>
        </div>

        {/* Lưới nội dung */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Cat trái */}
          <div
            className="rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-500 h-52 sm:h-60"
            onMouseEnter={() => setHoverCat1(true)}
            onMouseLeave={() => setHoverCat1(false)}
          >
            <img
              src={hoverCat1 ? catHover : cat1}
              alt="cat1"
              className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
            />
          </div>

          {/* Tech Skills */}
          <div className="col-span-2 bg-white/30 dark:bg-gray-800/30 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 backdrop-blur-sm h-auto">
            <h3 className="text-2xl font-semibold pb-5">
              ⚙️ Công cụ & Công nghệ
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 pb-5">
              Thành thạo các công cụ hiện đại giúp xây dựng ứng dụng web nhanh,
              linh hoạt và tối ưu trải nghiệm người dùng.
            </p>

            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-r from-white dark:from-gray-800 z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-l from-white dark:from-gray-800 z-10 pointer-events-none" />

              {/* Motion div frontend */}
              <motion.div
                className="flex gap-7 sm:gap-9  pb-4"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              >
                {techSkills.frontend.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 text-base sm:text-lg text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform whitespace-nowrap"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    {skill.name}
                  </div>
                ))}
              </motion.div>

              {/* Motion div backend */}
              <motion.div
                className="flex gap-7 sm:gap-9 pt-2"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {techSkills.backend.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 text-base sm:text-lg text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform whitespace-nowrap"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    {skill.name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="col-span-2 bg-white/30 dark:bg-gray-800/30 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 backdrop-blur-sm mt-4 md:mt-0">
            <h3 className="text-2xl font-semibold pb-5">
              💡 Kỹ Năng Mềm & Phát Triển Bản Thân
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 pb-5">
              Mình đề cao tinh thần học hỏi, khả năng giao tiếp, hợp tác và giải
              quyết vấn đề trong môi trường năng động.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 justify-items-start">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="relative flex items-center justify-center bg-slate-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-200 px-2 rounded-md text-base sm:text-lg border border-slate-200 dark:border-gray-600 shadow-sm select-none"
                  animate={{ y: [0, -1, 0, 1, 0], x: [0, 1, 0, -1, 0] }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random(),
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <img
                    src={bookIcon}
                    alt="Book"
                    className="absolute -top-2 -right-2 sm:-top-5 sm:-right-5 w-6 h-6 sm:w-10 sm:h-10 opacity-80 pointer-events-none"
                  />
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cat phải */}
          <div
            className="rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-500 h-52 sm:h-60 md:mt-0"
            onMouseEnter={() => setHoverCat3(true)}
            onMouseLeave={() => setHoverCat3(false)}
          >
            <img
              src={hoverCat3 ? catHover : cat3}
              alt="cat3"
              className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
