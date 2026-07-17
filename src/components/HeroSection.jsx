"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.svg";
import bookIcon from "../assets/closed-book.svg";
import rocketIcon from "../assets/rocket-icon.svg";
import laptopIcon from "../assets/laptop-icon.svg";

const cvPdf = "/Ngo_Xuan_Cuong_CV.pdf";

/* ─── Animated particles (dark mode only) ──────────────────────── */
const Particle = ({ x, y, size, color, delay, dx1, dy1, dx2, dy2 }) => (
  <div
    className="absolute rounded-full pointer-events-none hidden dark:block"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      background: color,
      boxShadow: `0 0 ${parseInt(size) * 2}px ${color}`,
      opacity: 0.7,
      "--dx1": `${dx1}px`,
      "--dy1": `${dy1}px`,
      "--dx2": `${dx2}px`,
      "--dy2": `${dy2}px`,
      animation: `particle-drift ${8 + delay * 2}s ease-in-out ${delay}s infinite`,
    }}
  />
);

const particles = [...Array(28)].map((_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: `${Math.random() * 6 + 2}px`,
  color: i % 3 === 0 ? "rgba(0,245,255,0.8)" : i % 3 === 1 ? "rgba(168,85,247,0.7)" : "rgba(240,171,252,0.6)",
  delay: Math.random() * 5,
  dx1: (Math.random() - 0.5) * 120,
  dy1: (Math.random() - 0.5) * 80,
  dx2: (Math.random() - 0.5) * 100,
  dy2: (Math.random() - 0.5) * 60,
}));

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* ── Background ─────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10">
        {/* Dark mode background */}
        <div className="hidden dark:block absolute inset-0 bg-[#020817]">
          {/* Cyber grid */}
          <div className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)`,
              backgroundSize: "70px 70px",
            }}
          />
          {/* Glow orbs */}
          <motion.div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(0,245,255,0.12), transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full blur-[150px]"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.14), transparent 70%)" }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Light mode background */}
        <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50">
          {/* Subtle grid */}
          <div className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          {/* Subtle colour blobs */}
          <div className="absolute top-[5%] left-[10%] w-[450px] h-[450px] rounded-full bg-sky-200/40 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-violet-200/30 blur-[140px]" />
          <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] rounded-full bg-cyan-100/50 blur-[80px]" />
        </div>

        {/* Particles — dark only */}
        {particles.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      {/* ── Floating Icons ──────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src={bookIcon.src || bookIcon} alt="" className="absolute top-[8%] left-[4%] w-20 sm:w-32 md:w-44 opacity-60 dark:opacity-70 animate-float-x"
          style={{ filter: "drop-shadow(0 0 16px rgba(0,200,255,0.5))" }} />
        <img src={rocketIcon.src || rocketIcon} alt="" className="absolute top-[20%] right-[10%] md:right-[30%] w-20 sm:w-36 md:w-44 opacity-60 dark:opacity-70 animate-float-rotate"
          style={{ filter: "drop-shadow(0 0 16px rgba(168,85,247,0.6))" }} />
        <img src={laptopIcon.src || laptopIcon} alt="" className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-20 sm:w-36 md:w-44 opacity-60 dark:opacity-70 animate-float-y"
          style={{ filter: "drop-shadow(0 0 16px rgba(240,171,252,0.5))" }} />
      </div>

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 w-full">
        {/* Text */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-5"
          initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Label */}
          <div className="section-label">FULLSTACK DEVELOPER</div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-gray-700 dark:text-slate-100">Xin chào, mình là</span>
            <br />
            <span className="heading-gradient">Ngô Xuân Cường</span>
          </h1>

          {/* Typewriter */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 dark:text-slate-300 flex items-center gap-2">
            <span className="text-cyan-500 dark:text-cyan-400 text-base font-mono">{">"}</span>
            <Typewriter
              words={["Fullstack Developer 🌐", "React Enthusiast ⚛️", "Node.js & MongoDB 🛠️", "UI/UX Futurist 🎨"]}
              loop={0} cursor cursorStyle="_" typeSpeed={65} deleteSpeed={45} delaySpeed={1800}
            />
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-500 dark:text-slate-400 max-w-md sm:max-w-lg leading-relaxed">
            Mình đam mê xây dựng các ứng dụng web hiện đại, mượt mà và tối ưu.
            Luôn học hỏi công nghệ mới để tạo ra trải nghiệm người dùng{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">sáng tạo và hiệu quả</span>.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mt-2">
            {[{ val: "3+", label: "Năm học tập" }, { val: "10+", label: "Dự án" }, { val: "5+", label: "Công nghệ" }].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold font-mono text-cyan-600 dark:text-cyan-400">{s.val}</div>
                <div className="text-xs text-gray-400 dark:text-slate-500 mt-0.5 tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-solid-neon flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base"
            >
              <span>🚀</span> Xem dự án
            </button>
            <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="btn-neon flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base">
              <span>📄</span> Xem CV
            </a>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative">
            {/* Outer rings */}
            <div className="absolute inset-[-20px] rounded-full border border-cyan-400/20 dark:border-cyan-400/15 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-38px] rounded-full border border-purple-400/15 dark:border-purple-400/10 animate-[spin_35s_linear_infinite_reverse]" />

            {/* Halo */}
            <div className="absolute inset-0 rounded-full blur-3xl -z-10 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 dark:from-cyan-400/25 dark:to-purple-400/25" />

            {/* Avatar */}
            <div className="avatar-ring relative">
              <img
                src={avatar.src || avatar}
                alt="Avatar Ngô Xuân Cường"
                className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover
                  border-2 border-cyan-400/50 dark:border-cyan-400/40
                  shadow-[0_0_30px_rgba(8,145,178,0.2)] dark:shadow-none
                  glow-avatar"
              />
            </div>

            {/* Corner deco */}
            <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-cyan-500/50 dark:border-cyan-400/60" />
            <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-purple-500/50 dark:border-purple-400/60" />

            {/* Status badge */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap
                bg-white/90 border border-gray-200 shadow-md text-gray-700
                dark:bg-[#061432]/90 dark:border-cyan-400/20 dark:text-cyan-300"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Sẵn sàng hợp tác
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-gray-400 dark:text-slate-500 tracking-[0.2em] uppercase">Cuộn xuống</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-500/50 dark:from-cyan-400/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
