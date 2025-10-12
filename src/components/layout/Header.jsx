import React, { useState, useEffect, useRef } from "react";
import { House, User, Brain, Rocket, Contact, Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import nc from "../../assets/NC.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const menuRef = useRef(null);

  const menuItems = [
    { href: "#hero", label: "Trang chủ", icon: <House className="w-5 h-5" /> },
    // { href: "#about", label: "Giới thiệu", icon: <User className="w-5 h-5" /> },
    { href: "#skills", label: "Kỹ năng", icon: <Brain className="w-5 h-5" /> },
    { href: "#projects", label: "Dự án", icon: <Rocket className="w-5 h-5" /> },
    {
      href: "#contact",
      label: "Liên hệ",
      icon: <Contact className="w-5 h-5" />,
    },
  ];

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Theo dõi vị trí cuộn để highlight mục tương ứng
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(menuItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Render các mục menu
  const renderMenuItems = (isMobile = false) => {
    return menuItems.map((item) => {
      const isActive = activeSection === item.href;
      const baseClass =
        "relative flex items-center gap-1 px-2 py-2 text-sm font-medium transition-all duration-300";
      const colorClass = isMobile
        ? "text-gray-800 dark:text-gray-200 hover:text-blue-500"
        : "text-gray-700 dark:text-gray-200 hover:text-blue-500";
      const activeClass = isActive ? "text-blue-600 dark:text-blue-400" : "";

      return (
        <a
          key={item.href}
          href={item.href}
          className={`${baseClass} ${colorClass} ${activeClass}`}
          onClick={(e) => {
            e.preventDefault(); // tránh nhảy gắt
            const target = document.querySelector(item.href);
            if (target) {
              const headerOffset = 80;
              const elementPosition =
                target.getBoundingClientRect().top + window.scrollY;
              const offsetPosition = elementPosition - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
            setActiveSection(item.href);
            if (isMobile) setMenuOpen(false);
          }}
        >
          {item.icon}
          <span>{item.label}</span>
          <span
            className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
              isActive ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          ></span>
        </a>
      );
    });
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/20 dark:bg-gray-900/30 backdrop-blur-lg border-b border-white/10 dark:border-gray-700/50 shadow-lg transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-10 py-3">
        {/* ==== LOGO ==== */}
        <a
          href=""
          className="group flex items-center gap-2 text-2xl font-bold tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => setActiveSection("#hero")}
        >
          <img
            src={nc}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            NC
          </span> */}
        </a>

        {/* ==== MENU DESKTOP ==== */}
        <nav className="hidden md:flex items-center gap-6">
          {renderMenuItems(false)}
          <DarkModeToggle />
        </nav>

        {/* ==== MENU MOBILE ==== */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-lg dark:text-white hover:bg-gradient-to-r from-blue-500/30 to-purple-500/30 transition"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {isMenuOpen && (
            <nav
              ref={menuRef}
              className="absolute right-4 mt-3 w-56 bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-white/80 dark:border-gray-700/90 rounded-xl animate-fadeSlideDown z-50"
            >
              <ul className="flex flex-col gap-3 p-4">
                {renderMenuItems(true)}
              </ul>
              <div className="flex justify-center mb-2">
                <DarkModeToggle />
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
