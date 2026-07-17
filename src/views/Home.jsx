"use client";
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
    <div className="relative overflow-hidden min-h-screen transition-colors duration-700
      text-gray-900 dark:text-white
      bg-white dark:bg-[#020817]
    ">
      {/* ── DARK MODE: animated background ────────────────────── */}
      <div className="hidden dark:block absolute inset-0 -z-20 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[#020817]" />

        {/* Cyber grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Animated glow orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(0,245,255,0.08), transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        <motion.div
          className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(240,171,252,0.06), transparent 70%)" }}
          animate={{ x: [0, 60, 0], y: [0, -40, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
      </div>

      {/* ── LIGHT MODE: subtle gradient background ────────────── */}
      <div className="dark:hidden absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50/60" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Subtle light glows */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-sky-200/30 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-200/25 blur-[100px]" />
      </div>

      {/* ── Content ────────────────────────────────────────────── */}
      <Header />
      <main className="relative z-10">
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
