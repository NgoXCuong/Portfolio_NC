"use client";
import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeMode } from "../../context/ThemeMode";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeMode);

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-7 flex items-center rounded-full px-1 transition-colors duration-300
        ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}`}
    >
      {/* Icon mặt trời & mặt trăng */}
      <Sun className="absolute left-1 w-4 h-4 text-yellow-400" />
      <Moon className="absolute right-1 w-4 h-4 text-blue-500" />

      {/* Nút trượt */}
      <span
        className={`w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300
          ${theme === "dark" ? "translate-x-7" : "translate-x-0"}`}
      />
    </button>
  );
};

export default DarkModeToggle;
