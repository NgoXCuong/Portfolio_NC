// Home.jsx
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative text-gray-900 dark:text-white overflow-hidden min-h-screen transition-colors duration-700">
      {/* 🌌 Nền phát sáng tương lai */}
      <div className="absolute inset-0 -z-10 overflow-hidden transition-all duration-700 bg-gradient-to-br from-white via-sky-100 to-pink-100 dark:from-[#050510] dark:via-[#0A0F24] dark:to-[#000000]">
        {/* 🪩 Gradient phủ nhẹ */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 dark:from-cyan-500/15 dark:via-purple-700/15 dark:to-pink-500/15 animate-[pulse_12s_ease-in-out_infinite]" />

        {/* 💫 Các khối sáng lớn */}
        <motion.div
          className="absolute top-20 left-32 w-[400px] h-[400px] rounded-full blur-3xl mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,255,255,0.35), transparent 70%)",
          }}
          animate={{
            x: [0, 70, -70, 0],
            y: [0, -40, 40, 0],
            opacity: [0.3, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full blur-[150px] mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,0,150,0.3), transparent 70%)",
          }}
          animate={{
            x: [0, -60, 60, 0],
            y: [0, 60, -60, 0],
            opacity: [0.3, 0.9, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 🔥 Đom đóm bay (rõ + mờ xen kẽ, hỗ trợ dark/light mode) */}
        {[...Array(30)].map((_, i) => {
          const isDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;

          // Xen kẽ rõ - mờ
          const isBright = i % 2 === 0;

          // Chọn màu theo theme
          const hue = isDark
            ? Math.random() * 80 + 200 // xanh lam tím hơn
            : Math.random() * 60 + 190; // dịu hơn khi sáng

          const saturation = isDark ? 100 : 85;
          const lightness = isDark ? (isBright ? 75 : 50) : isBright ? 45 : 30;

          const size = isBright
            ? Math.random() * 20 + 10
            : Math.random() * 10 + 4;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-screen blur-lg"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: isDark
                  ? isBright
                    ? "0 0 18px 8px rgba(255,255,255,0.9)"
                    : "0 0 8px 3px rgba(255,255,255,0.5)"
                  : isBright
                  ? "0 0 14px 6px rgba(0,0,0,0.8)"
                  : "0 0 6px 2px rgba(0,0,0,0.5)",
                opacity: isBright ? 0.9 : 0.5,
                filter: isBright ? "blur(6px)" : "blur(10px)",
              }}
              animate={{
                x: [0, Math.random() * 120 - 60],
                y: [0, Math.random() * 100 - 50],
                opacity: [isBright ? 0.6 : 0.3, 1, isBright ? 0.6 : 0.3],
                scale: [1, isBright ? 1.8 : 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 4,
              }}
            />
          );
        })}
      </div>

      {/* 🧩 Nội dung trang */}
      <Header />
      <main>
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
