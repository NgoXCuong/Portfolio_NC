import { Mail, Phone, MapPin, Facebook, Github, Linkedin, Instagram } from "lucide-react";

export const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "ngocuongcm2005@gmail.com",
    iconBgDark: "rgba(0,245,255,0.1)",
    iconBorderDark: "rgba(0,245,255,0.25)",
    iconColorDark: "#67e8f9",
    iconBgLight: "rgba(8,145,178,0.1)",
    iconBorderLight: "rgba(8,145,178,0.3)",
    iconColorLight: "#0891b2",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Điện thoại",
    value: "+84 388 545 085",
    iconBgDark: "rgba(74,222,128,0.1)",
    iconBorderDark: "rgba(74,222,128,0.25)",
    iconColorDark: "#86efac",
    iconBgLight: "rgba(22,163,74,0.1)",
    iconBorderLight: "rgba(22,163,74,0.3)",
    iconColorLight: "#16a34a",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Địa chỉ",
    value: "Tp. Hà Nội, Việt Nam",
    iconBgDark: "rgba(168,85,247,0.1)",
    iconBorderDark: "rgba(168,85,247,0.25)",
    iconColorDark: "#d8b4fe",
    iconBgLight: "rgba(124,58,237,0.1)",
    iconBorderLight: "rgba(124,58,237,0.3)",
    iconColorLight: "#7c3aed",
  },
];

export const socials = [
  { icon: <Facebook className="w-5 h-5" />, link: "https://www.facebook.com/namay.changtrai.1428921", label: "Facebook" },
  { icon: <Github className="w-5 h-5" />, link: "https://github.com/NgoXCuong", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/c%C6%B0%E1%BB%9Dng-ng%C3%B4-xu%C3%A2n-807485329/", label: "LinkedIn" },
  { icon: <Instagram className="w-5 h-5" />, link: "https://www.instagram.com/__nc_it__/", label: "Instagram" },
];
