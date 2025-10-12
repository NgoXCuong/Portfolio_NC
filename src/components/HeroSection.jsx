import React from "react";
import { Typewriter } from "react-simple-typewriter";
import avatar from "../assets/avatar.svg";
import bookIcon from "../assets/closed-book.svg";
import rocketIcon from "../assets/rocket-icon.svg";
import laptopIcon from "../assets/laptop-icon.svg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Background glow + Floating icons */}
      <div className="absolute inset-0 -z-10">
        {/* Floating icons with animation */}
        {/* Book Icon - góc trên trái */}
        <img
          src={bookIcon}
          alt="Book"
          className="absolute 
  top-[10%] left-[5%] w-30 sm:w-48 md:w-56 
  opacity-80 animate-float-x 
  hover:scale-110 transition-transform duration-500"
        />

        {/* Rocket Icon - góc trên phải */}
        <img
          src={rocketIcon}
          alt="Rocket"
          className="absolute 
  top-[15%] sm:top-[25%] md:top-[20%] right-[5%] sm:right-[25%] md:right-[35%]
  w-30 sm:w-48 md:w-56
  opacity-70 animate-float-rotate 
  hover:scale-110 transition-transform duration-500"
        />

        {/* Laptop Icon - dưới giữa */}
        <img
          src={laptopIcon}
          alt="Laptop"
          className="absolute 
  bottom-[5%] sm:bottom-[10%] left-1/2 -translate-x-1/2 
  w-30 sm:w-48 md:w-56 
  opacity-70 animate-float-y 
  hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 w-full">
        {/* Text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            I'm Ngô Xuân Cường
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
            <Typewriter
              words={[
                "Frontend Developer 🚀",
                "UI/UX Enthusiast ✨",
                "React & TailwindCSS Lover 💻",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 max-w-md sm:max-w-lg md:max-w-xl">
            Mình đam mê xây dựng giao diện web hiện đại, trực quan, tối ưu trải
            nghiệm người dùng với công nghệ React, TailwindCSS và các xu hướng
            mới.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-row sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              🚀 Xem dự án
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-400/40 dark:border-gray-500/40 bg-white/40 dark:bg-white/5 backdrop-blur-lg hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 text-gray-800 dark:text-gray-200 font-medium hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              ✨ Tải CV
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex-1 flex justify-center md:justify-end mb-6 md:mb-0">
          <div className="relative">
            <img
              src={avatar}
              alt="Avatar"
              className="w-48 h-48 sm:w-50 sm:h-50 md:w-90 md:h-90 rounded-full object-cover border-4 border-transparent p-[3px] hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full animate-pulse bg-blue-500/20 blur-2xl opacity-40 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
