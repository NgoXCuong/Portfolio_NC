import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin,
  Facebook, Github, Linkedin, Instagram, Send,
} from "lucide-react";

const contactInfo = [
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

const socials = [
  { icon: <Facebook className="w-5 h-5" />, link: "https://www.facebook.com/namay.changtrai.1428921", label: "Facebook" },
  { icon: <Github className="w-5 h-5" />, link: "https://github.com/NgoXCuong", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/c%C6%B0%E1%BB%9Dng-ng%C3%B4-xu%C3%A2n-807485329/", label: "LinkedIn" },
  { icon: <Instagram className="w-5 h-5" />, link: "https://www.instagram.com/__nc_it__/", label: "Instagram" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

/* ─── Contact Row ─────────────────────────────────────────────── */
const ContactRow = ({ item }) => (
  <div className="contact-row">
    {/* Icon box */}
    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
      border dark:border-none
      bg-gray-100 dark:bg-transparent border-gray-200"
      style={{
        /* Will be overridden per item via inline, but just for dark we use the icon color */
      }}
    >
      {/* dark icon */}
      <span className="hidden dark:flex" style={{ color: item.iconColorDark }}>{item.icon}</span>
      {/* light icon */}
      <span className="dark:hidden flex" style={{ color: item.iconColorLight }}>{item.icon}</span>
    </div>
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest mb-0.5
        text-gray-400 dark:text-slate-500">
        {item.label}
      </p>
      <p className="font-medium text-sm text-gray-800 dark:text-slate-200">{item.value}</p>
    </div>
  </div>
);

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyan-400/5 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-400/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="section-label justify-center mb-4">LIÊN HỆ</div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="heading-gradient">Hãy Kết Nối</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Mình luôn sẵn sàng trao đổi về cơ hội hợp tác, dự án freelance hoặc chia sẻ kiến thức.
            Đừng ngại{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-medium">gửi lời nhắn</span> nhé!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Info */}
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {contactInfo.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <ContactRow item={item} />
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div variants={itemVariants} className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3
                text-gray-400 dark:text-slate-500">
                Kết nối với mình:
              </p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a key={i} href={s.link} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label} className="social-icon">
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={itemVariants} className="pt-1">
              <div className="rounded-2xl overflow-hidden h-[200px]
                border border-gray-200 dark:border-cyan-400/15
                shadow-sm dark:shadow-none">
                <iframe
                  title="Hanoi Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.970236348145!2d105.7640263758415!3d21.033876887601682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0bf0f1742f%3A0xe820ab53e8c05841!2zS8O9IFTDumMgWMOhIE3hu7kgxJDDrG5o!5e0!3m2!1svi!2s!4v1760261989245!5m2!1svi!2s"
                  width="100%" height="100%" className="border-0
                    dark:grayscale-[50%] dark:opacity-80 dark:hover:grayscale-0 dark:hover:opacity-100
                    transition-all duration-500"
                  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-5 rounded-2xl p-6 overflow-hidden
                bg-white border border-gray-200 shadow-md
                dark:glass-card dark:bg-[#061432]/60 dark:border-cyan-400/12 dark:shadow-none"
            >
              {/* Top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px]
                bg-gradient-to-r from-transparent via-cyan-500/50 dark:via-cyan-400/50 to-transparent" />

              <div className="flex items-center gap-3 mb-1">
                <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100">Gửi Tin Nhắn</h3>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2
                  text-gray-400 dark:text-slate-500">
                  Tên của bạn
                </label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Ngô Xuân Cường" className="input-cyber font-sans" required />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2
                  text-gray-400 dark:text-slate-500">
                  Email
                </label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="hello@example.com" className="input-cyber font-sans" required />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2
                  text-gray-400 dark:text-slate-500">
                  Tin nhắn
                </label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  rows={4} placeholder="Nhập tin nhắn của bạn..."
                  className="input-cyber font-sans resize-none" required />
              </div>

              <button type="submit"
                className="btn-solid-neon flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm mt-1 text-white">
                {sent ? <>✅ Đã gửi thành công!</> : <><Send className="w-4 h-4" />Gửi tin nhắn</>}
              </button>

              <div className="corner-bracket bl" />
              <div className="corner-bracket br" />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
