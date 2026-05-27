import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight, X, Brain, ShoppingCart, CheckSquare } from "lucide-react";
import project1 from "../assets/project1.avif";
import project2 from "../assets/project2.avif";
import project3 from "../assets/project3.avif";

/* ─── Project Data (from GitHub) ────────────────────────────── */
const projects = [
  {
    id: 1,
    title: "SmartDoc AI",
    subtitle: "Nền tảng Tài liệu thông minh với RAG",
    desc: "Giải pháp phân tích và tương tác tài liệu bằng AI (RAG). Tải tài liệu lên, đặt câu hỏi và nhận câu trả lời tức thì kèm trích dẫn chính xác đến từng số trang.",
    longDesc: "SmartDoc AI ứng dụng công nghệ RAG (Retrieval-Augmented Generation) kết hợp Google Gemini AI biến những tập tin PDF, Word tĩnh lặng thành trợ lý ảo am hiểu tường tận. Hệ thống xử lý OCR bằng BullMQ & Redis, lưu trữ vector embedding trên MongoDB Atlas, và cung cấp Smart Citation tự động mở file PDF và cuộn đến đúng trang nguồn.",
    github: "https://github.com/NgoXCuong/smartdoc-ai",
    demo: null,
    icon: <Brain className="w-5 h-5" />,
    accent: { from: "#00f5ff", to: "#7c3aed" },
    accentLight: { from: "#0891b2", to: "#6d28d9" },
    tag: "AI · Full-Stack",
    tagDark: { bg: "rgba(0,245,255,0.1)", border: "rgba(0,245,255,0.3)", text: "#67e8f9" },
    tagLight: { bg: "rgba(8,145,178,0.1)", border: "rgba(8,145,178,0.4)", text: "#0e7490" },
    features: [
      "🤖 Chatbot RAG với Google Gemini",
      "🎯 Smart Citation – click trích dẫn mở đúng trang PDF",
      "🔍 OCR Background Jobs (BullMQ + Redis)",
      "📊 User Quota Dashboard (Recharts)",
      "⚙️ Admin Control Panel",
      "🏢 Quản lý Workspaces hợp tác",
    ],
    stack: ["Next.js 14", "Node.js", "LangChain", "MongoDB Atlas", "Redis", "Supabase", "Gemini AI"],
    image: project1,
    commits: 15,
    type: "TypeScript · JavaScript",
  },
  {
    id: 2,
    title: "Chronos Watch",
    subtitle: "Nền tảng E-commerce đồng hồ cao cấp",
    desc: "Ứng dụng thương mại điện tử chuyên bán đồng hồ với AI tư vấn sản phẩm, tích hợp thanh toán VNPay, quản lý đơn hàng và dashboard admin đầy đủ.",
    longDesc: "Nền tảng mua sắm đồng hồ toàn diện: khách hàng duyệt sản phẩm, quản lý giỏ hàng, thanh toán VNPay an toàn, đánh giá sản phẩm 1-5 sao. Admin có dashboard thống kê doanh thu, quản lý kho hàng, xuất Excel. AI hỗ trợ tìm kiếm sản phẩm và tư vấn chọn đồng hồ phù hợp.",
    github: "https://github.com/NgoXCuong/chronos-watch",
    demo: null,
    icon: <ShoppingCart className="w-5 h-5" />,
    accent: { from: "#f59e0b", to: "#ef4444" },
    accentLight: { from: "#d97706", to: "#dc2626" },
    tag: "E-Commerce · Full-Stack",
    tagDark: { bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)", text: "#fbbf24" },
    tagLight: { bg: "rgba(217,119,6,0.1)", border: "rgba(217,119,6,0.4)", text: "#b45309" },
    features: [
      "🛒 Giỏ hàng & Đặt hàng full flow",
      "💳 Tích hợp thanh toán VNPay",
      "🤖 AI tư vấn & tìm kiếm sản phẩm",
      "⭐ Đánh giá & nhận xét sản phẩm",
      "🎁 Voucher & mã giảm giá",
      "📊 Admin Dashboard – báo cáo doanh thu",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MySQL", "Sequelize", "Cloudinary", "VNPay"],
    image: project2,
    commits: 20,
    type: "JavaScript",
  },
  {
    id: 3,
    title: "ZenTask",
    subtitle: "Nền tảng Quản lý Công việc hiện đại",
    desc: "Ứng dụng quản lý công việc toàn diện với bảng Kanban Drag & Drop, workspace hợp tác nhóm, bình luận Markdown, thông báo real-time và dashboard thống kê.",
    longDesc: "ZenTask tối ưu năng suất cá nhân và hợp tác nhóm: tạo workspace cho từng dự án, phân quyền Owner/Admin/Member, bảng Kanban với Drag & Drop trực quan (3 cột To Do → In Progress → Done), bình luận task với Markdown, file đính kèm đám mây, thông báo real-time và xuất báo cáo PDF.",
    github: "https://github.com/NgoXCuong/zentask-todo-app",
    demo: null,
    icon: <CheckSquare className="w-5 h-5" />,
    accent: { from: "#10b981", to: "#3b82f6" },
    accentLight: { from: "#059669", to: "#2563eb" },
    tag: "Productivity · Full-Stack",
    tagDark: { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)", text: "#34d399" },
    tagLight: { bg: "rgba(5,150,105,0.1)", border: "rgba(5,150,105,0.4)", text: "#047857" },
    features: [
      "📋 Kanban Board với Drag & Drop",
      "🏢 Workspaces & phân quyền nhóm",
      "💬 Bình luận Markdown real-time",
      "📎 File đính kèm đám mây",
      "🔔 Thông báo & email reminders",
      "📊 Dashboard thống kê & xuất PDF",
    ],
    stack: ["React 18", "Vite", "Node.js", "Express 5", "MySQL", "Sequelize", "JWT", "Nodemailer"],
    image: project3,
    commits: 47,
    type: "JavaScript",
  },
];

/* ─── Stack Chip ──────────────────────────────────────────────── */
const StackChip = ({ label }) => (
  <span className="
    inline-block px-2 py-0.5 text-xs font-mono rounded
    bg-gray-100 text-gray-600 border border-gray-200
    dark:bg-white/8 dark:text-cyan-300/80 dark:border-white/10
    transition-colors duration-300
  ">
    {label}
  </span>
);

/* ─── Project Card ────────────────────────────────────────────── */
const ProjectCard = ({ project, index, onOpen }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
    >
      <div
        className="
          group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer h-full
          bg-white border border-gray-200 shadow-sm
          dark:bg-[#061432]/70 dark:border-white/8 dark:shadow-none
          hover:shadow-xl hover:-translate-y-1.5
          dark:hover:border-white/20 dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          transition-all duration-400
        "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onOpen(project)}
      >
        {/* Top gradient accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, ${project.accent.from}, ${project.accent.to})` }}
        />

        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="
            absolute inset-0
            bg-gradient-to-t from-white/90 via-white/20 to-transparent
            dark:from-[#061432]/85 dark:via-[#061432]/20 dark:to-transparent
          " />

          {/* Tag */}
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide"
            style={{
              background: project.tagDark.bg,
              border: `1px solid ${project.tagDark.border}`,
              color: project.tagDark.text,
            }}
          >
            <span className="dark:block hidden">{project.tag}</span>
            <span
              className="dark:hidden block"
              style={{
                background: project.tagLight.bg,
                border: `1px solid ${project.tagLight.border}`,
                color: project.tagLight.text,
                padding: "2px 10px",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {project.tag}
            </span>
          </div>

          {/* Commits badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/30 dark:bg-black/50 backdrop-blur-sm text-white text-xs font-mono">
            <Github className="w-3 h-3" />
            {project.commits} commits
          </div>

          {/* Icon */}
          <div
            className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-white"
            style={{ background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})` }}
          >
            {project.icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-5 gap-3">
          {/* Title */}
          <div>
            <p className="text-xs text-gray-400 dark:text-slate-500 font-mono tracking-wider mb-1">{project.type}</p>
            <h3 className="
              text-lg font-bold transition-colors duration-200
              text-gray-800 group-hover:text-transparent group-hover:bg-clip-text
              dark:text-slate-100
            "
              style={{
                backgroundImage: hovered
                  ? `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})`
                  : "none",
                WebkitBackgroundClip: hovered ? "text" : "unset",
                WebkitTextFillColor: hovered ? "transparent" : "unset",
              }}
            >
              {project.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{project.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed line-clamp-3 flex-1">
            {project.desc}
          </p>

          {/* Stack chips */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.stack.slice(0, 4).map((s) => (
              <StackChip key={s} label={s} />
            ))}
            {project.stack.length > 4 && (
              <span className="text-xs text-gray-400 dark:text-slate-500 self-center">+{project.stack.length - 4} more</span>
            )}
          </div>

          {/* Divider */}
          <div className="
            h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent
            dark:via-white/8
            group-hover:via-current transition-colors duration-300
          " />

          {/* Actions */}
          <div className="flex items-center justify-between">
            <button
              className="
                flex items-center gap-1.5 text-sm font-medium transition-colors duration-200
                text-gray-500 hover:text-gray-800
                dark:text-slate-400 dark:hover:text-cyan-300
              "
              onClick={(e) => { e.stopPropagation(); onOpen(project); }}
            >
              Xem chi tiết
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200
                dark:bg-white/6 dark:text-slate-300 dark:hover:bg-white/12 dark:border-white/10
              "
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Detail Modal ────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal */}
        <motion.div
          className="
            relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl
            bg-white border border-gray-200 shadow-2xl
            dark:bg-[#070f2b] dark:border-white/12
          "
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Top gradient bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
            style={{ background: `linear-gradient(90deg, ${project.accent.from}, ${project.accent.to})` }}
          />

          {/* Header image */}
          <div className="relative h-52 overflow-hidden rounded-t-2xl">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent dark:from-[#070f2b] dark:via-[#070f2b]/40" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center
                bg-white/80 hover:bg-white text-gray-700 border border-gray-200 shadow
                dark:bg-white/10 dark:hover:bg-white/20 dark:text-slate-200 dark:border-white/20
                transition-all duration-200
              "
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon & title overlay */}
            <div className="absolute bottom-4 left-5 flex items-end gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})` }}
              >
                {project.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400">{project.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-6">
            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              {project.longDesc}
            </p>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-slate-200 mb-3 uppercase tracking-wider">
                ✨ Tính năng nổi bật
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f, i) => (
                  <li
                    key={i}
                    className="
                      flex items-start gap-2 text-sm
                      text-gray-600 dark:text-slate-400
                      bg-gray-50 dark:bg-white/4
                      border border-gray-100 dark:border-white/6
                      rounded-lg px-3 py-2
                    "
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-slate-200 mb-3 uppercase tracking-wider">
                🛠️ Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="
                      px-3 py-1 rounded-lg text-xs font-mono font-medium
                      bg-gray-100 text-gray-700 border border-gray-200
                      dark:bg-white/8 dark:text-cyan-300 dark:border-white/12
                    "
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                  text-sm font-semibold transition-all duration-200
                  bg-gray-900 hover:bg-gray-800 text-white
                  dark:bg-white/8 dark:hover:bg-white/15 dark:text-slate-200 dark:border dark:border-white/12
                "
              >
                <Github className="w-4 h-4" />
                Xem trên GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{ background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})` }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Main Component ──────────────────────────────────────────── */
const ProjectsSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-cyan-400/5 dark:bg-cyan-400/5 blur-[130px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-500/6 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-20">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label justify-center mb-4">DỰ ÁN CÁ NHÂN</div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="heading-gradient">Những Gì Tôi Đã Xây</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Những dự án thực tế được xây dựng với đam mê — từ AI Document Platform
            đến E-commerce và Task Management.
            <span className="text-cyan-600 dark:text-cyan-400 font-medium"> Click để xem chi tiết</span>.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />
          ))}
        </div>

        {/* View more */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/NgoXCuong"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200
              border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400
              dark:border-white/15 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300 dark:hover:bg-cyan-400/5
            "
          >
            <Github className="w-4 h-4" />
            Xem tất cả trên GitHub
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default ProjectsSection;
