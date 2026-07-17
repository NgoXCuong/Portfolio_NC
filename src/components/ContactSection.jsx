"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo, socials } from "../data/contactData";

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
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setStatusMsg(data.message);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => { setStatus("idle"); setStatusMsg(""); }, 4000);
      } else {
        setStatus("error");
        setStatusMsg(data.error || "Đã xảy ra lỗi. Vui lòng thử lại.");
        setTimeout(() => { setStatus("idle"); setStatusMsg(""); }, 4000);
      }
    } catch {
      setStatus("error");
      setStatusMsg("Không thể kết nối đến máy chủ. Vui lòng thử lại.");
      setTimeout(() => { setStatus("idle"); setStatusMsg(""); }, 4000);
    }
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: Info */}
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <ContactRow item={item} />
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div variants={itemVariants} className="pt-2">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3
        text-gray-400 dark:text-slate-500"
              >
                Kết nối với mình:
              </p>

              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="social-icon"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form + Map */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100">💬 Gửi Tin Nhắn</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="input-cyber"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="input-cyber"
                />
              </div>
              <textarea
                name="message"
                placeholder="Nội dung tin nhắn..."
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="input-cyber resize-none"
              />

              {/* Status message */}
              {statusMsg && (
                <div className={`text-sm font-medium px-4 py-2.5 rounded-lg border ${
                  status === "success"
                    ? "text-green-700 bg-green-50 border-green-200 dark:text-green-300 dark:bg-green-400/10 dark:border-green-400/20"
                    : "text-red-700 bg-red-50 border-red-200 dark:text-red-300 dark:bg-red-400/10 dark:border-red-400/20"
                }`}>
                  {status === "success" ? "✅" : "❌"} {statusMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-solid-neon px-6 py-3 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  <>🚀 Gửi Tin Nhắn</>
                )}
              </button>
            </form>

            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden h-[220px]
      border border-gray-200 dark:border-cyan-400/15
      shadow-sm dark:shadow-none"
            >
              <iframe
                title="Hanoi Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.970236348145!2d105.7640263758415!3d21.033876887601682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0bf0f1742f%3A0xe820ab53e8c05841!2zS8O5IFTDumMgWMOhIE3hu7kgxJDDrG5o!5e0!3m2!1svi!2s!4v1760261989245!5m2!1svi!2s"
                width="100%"
                height="100%"
                className="border-0 dark:grayscale-[50%] dark:opacity-80 dark:hover:grayscale-0 dark:hover:opacity-100 transition-all duration-500"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
