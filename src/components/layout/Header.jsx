"use client";
import React, { useState, useEffect, useRef } from "react";
import { House, Brain, Rocket, Contact, Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import nc from "../../assets/NC.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { href: "#hero",     label: "Trang chủ", icon: <House className="w-4 h-4" /> },
    { href: "#skills",   label: "Kỹ năng",   icon: <Brain className="w-4 h-4" /> },
    { href: "#projects", label: "Dự án",     icon: <Rocket className="w-4 h-4" /> },
    { href: "#contact",  label: "Liên hệ",   icon: <Contact className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = menuItems.map((item) => document.querySelector(item.href));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(menuItems[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
    setActiveSection(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? [
              /* dark */  "dark:bg-[#020817]/92 dark:border-b dark:border-cyan-500/20 dark:shadow-[0_4px_30px_rgba(0,245,255,0.05)]",
              /* light */ "bg-white/90 border-b border-gray-200/80 shadow-sm",
              "backdrop-blur-xl"
            ].join(" ")
          : "bg-transparent"
      }`}
    >
      {/* Top neon line — dark only */}
      <div className="hidden dark:block absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="container mx-auto flex justify-between items-center px-6 md:px-10 py-3">
        {/* LOGO */}
        <a
          href=""
          className="group flex items-center gap-3 cursor-pointer"
          onClick={() => setActiveSection("#hero")}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md group-hover:blur-lg transition-all duration-300" />
            <img
              src={nc.src || nc}
              alt="NC Logo"
              className="relative w-10 h-10 rounded-full object-cover
                border border-cyan-400/30 dark:border-cyan-400/40
                group-hover:border-cyan-400/70 transition-all duration-300"
            />
          </div>
          <span className="
            text-base font-bold tracking-[0.12em] hidden sm:block
            text-transparent bg-clip-text
            bg-gradient-to-r from-cyan-600 to-purple-600
            dark:from-cyan-400 dark:to-purple-400
          ">
            NGÔ XUÂN CƯỜNG
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 group
                  ${isActive
                    ? "text-cyan-600 dark:text-cyan-300 bg-cyan-500/8 dark:bg-cyan-400/10"
                    : "text-gray-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-cyan-500/6 dark:hover:bg-cyan-400/6"
                  }
                `}
              >
                <span className={`transition-colors ${isActive ? "text-cyan-500 dark:text-cyan-400" : "text-gray-400 dark:text-slate-400 group-hover:text-cyan-500"}`}>
                  {item.icon}
                </span>
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400 rounded-full" />
                )}
              </button>
            );
          })}
          <div className="ml-3 pl-3 border-l border-gray-200 dark:border-slate-700/60">
            <DarkModeToggle />
          </div>
        </nav>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-2">
          <DarkModeToggle />
          <button
            className="p-2 rounded-lg border text-gray-600 dark:text-slate-300
              border-gray-200 dark:border-cyan-400/20
              hover:text-cyan-600 dark:hover:text-cyan-400
              hover:border-cyan-400/40 hover:bg-cyan-500/5 dark:hover:bg-cyan-400/8
              transition-all"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {isMenuOpen && (
            <nav
              ref={menuRef}
              className="absolute top-full right-4 mt-2 w-52 rounded-xl animate-fadeSlideDown overflow-hidden
                bg-white/95 border border-gray-200 shadow-xl
                dark:bg-[#061432]/95 dark:border-cyan-400/15 dark:shadow-none"
            >
              <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent dark:via-cyan-400" />
              <ul className="flex flex-col p-3 gap-1">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => scrollTo(item.href)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                          ${isActive
                            ? "text-cyan-600 dark:text-cyan-300 bg-cyan-500/8 dark:bg-cyan-400/12"
                            : "text-gray-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-cyan-500/6 dark:hover:bg-cyan-400/8"
                          }
                        `}
                      >
                        <span className={isActive ? "text-cyan-500 dark:text-cyan-400" : "text-gray-400 dark:text-slate-400"}>{item.icon}</span>
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
