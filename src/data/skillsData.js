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

export const techSkills = {
  frontend: [
    { name: "React", icon: react }, { name: "Vite", icon: vite },
    { name: "JavaScript", icon: javaScript }, { name: "HTML5", icon: html5 },
    { name: "CSS3", icon: css3 }, { name: "TailwindCSS", icon: tailwind },
    // duplicate for seamless loop
    { name: "React", icon: react }, { name: "Vite", icon: vite },
    { name: "JavaScript", icon: javaScript }, { name: "HTML5", icon: html5 },
    { name: "CSS3", icon: css3 }, { name: "TailwindCSS", icon: tailwind },
  ],
  backend: [
    { name: "Node.js", icon: node }, { name: "Express", icon: express },
    { name: "Java", icon: java }, { name: "CSharp", icon: cSharp },
    // duplicate
    { name: "Node.js", icon: node }, { name: "Express", icon: express },
    { name: "Java", icon: java }, { name: "CSharp", icon: cSharp },
  ],
  database_tool: [
    { name: "MySQL", icon: mySQL }, { name: "MongoDB", icon: mongodb },
    { name: "Postman", icon: postman },
    // duplicate
    { name: "MySQL", icon: mySQL }, { name: "MongoDB", icon: mongodb },
    { name: "Postman", icon: postman },
  ],
};

export const softSkills = [
  { label: "Giao Tiếp", emoji: "💬" },
  { label: "Hòa Đồng", emoji: "🤝" },
  { label: "Đáng Tin Cậy", emoji: "🛡️" },
  { label: "Quản Lý Thời Gian", emoji: "⏰" },
  { label: "Ham Học Hỏi", emoji: "🔬" },
  { label: "Tư Duy Sáng Tạo", emoji: "💡" },
];
