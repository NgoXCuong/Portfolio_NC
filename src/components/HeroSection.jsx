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
        {/* Book Icon - góc trên trái */}
        <img
          src={bookIcon}
          alt="Book"
          className="absolute top-[10%] left-[5%] w-24 sm:w-40 md:w-48 
          opacity-90 animate-float-x hover:scale-110 
          transition-transform duration-500 
          filter drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] 
          hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.9)]"
        />

        {/* Rocket Icon - góc trên phải */}
        <img
          src={rocketIcon}
          alt="Rocket"
          className="absolute top-[15%] sm:top-[25%] md:top-[20%] right-[5%] sm:right-[25%] md:right-[35%]
          w-24 sm:w-40 md:w-48 opacity-90 animate-float-rotate hover:scale-110 
          transition-transform duration-500 
          filter drop-shadow-[0_0_18px_rgba(99,102,241,0.7)] 
          hover:drop-shadow-[0_0_28px_rgba(99,102,241,1)]"
        />

        {/* Laptop Icon - dưới giữa */}
        <img
          src={laptopIcon}
          alt="Laptop"
          className="absolute bottom-[5%] sm:bottom-[10%] left-1/2 -translate-x-1/2 
          w-24 sm:w-40 md:w-48 opacity-90 animate-float-y 
          hover:scale-110 transition-transform duration-500 
          filter drop-shadow-[0_0_18px_rgba(34,197,94,0.6)] 
          hover:drop-shadow-[0_0_28px_rgba(34,197,94,0.9)]"
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
                "Fullstack Developer 🌐",
                "React Enthusiast ⚛️",
                "Node.js & MongoDB Explorer 🛠️",
                "TailwindCSS Fanatic 🎨",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-md sm:max-w-lg md:max-w-xl">
            Mình yêu thích việc xây dựng các ứng dụng web hiện đại, mượt mà và
            tối ưu cho người dùng. Luôn cập nhật công nghệ mới để tạo ra trải
            nghiệm trực quan, hiệu quả và sáng tạo.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-row sm:flex-row gap-3 justify-center md:justify-start">
            <a
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
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
            {/* Avatar */}
            <img
              src={avatar}
              alt="Avatar"
              className="w-50 h-50 sm:w-70 sm:h-70 md:w-80 md:h-80 rounded-full object-cover 
        border-2 border-transparent glow-avatar transition-all duration-500"
            />

            {/* Vòng sáng nền mờ */}
            <div
              className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl opacity-40 
        animate-pulse -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
