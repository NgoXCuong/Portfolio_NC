"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#020817] border-t border-cyan-400/10">
      {/* Top neon line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="container mx-auto px-6 md:px-20 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="text-cyan-400/60 font-mono text-xs">{"</>"}</span>
          Built with ❤️ by
          <span className="text-slate-300 font-semibold">Ngô Xuân Cường</span>
        </div>
        <div className="text-xs text-slate-600 font-mono tracking-wider">
          © {new Date().getFullYear()} · All rights reserved
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>Online · Hà Nội, Việt Nam</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
