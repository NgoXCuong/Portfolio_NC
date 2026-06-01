# 🚀 Portfolio — Ngô Xuân Cường

> Personal portfolio website built with **React + Vite**, designed in a **Cyberpunk / Futuristic** aesthetic. Fully responsive, supports **Dark & Light mode**, and showcases 3 real-world full-stack projects.

---

## ✨ Live Preview

> 🚀 **[https://portfolio-nc-lemon.vercel.app/](https://portfolio-nc-lemon.vercel.app/)**

---

## 🖼️ Screenshots

| Dark Mode | Light Mode |
|-----------|------------|
| Cyberpunk neon grid, particle effects, avatar glow | Clean white bg, readable cyan/purple accents |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) + Custom CSS |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Typewriter | [react-simple-typewriter](https://github.com/awran5/react-simple-typewriter) |
| Fonts | Orbitron · Chakra Petch (Google Fonts) |

---

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── assets/              # SVG icons, images, cat photos
│   ├── components/
│   │   ├── layout/          # Header, DarkMode toggle
│   │   ├── projects/        # ProjectCard.jsx, ProjectModal.jsx
│   │   ├── HeroSection.jsx  # Animated hero with particles
│   │   ├── SkillSection.jsx # Marquee tech stack + soft skills
│   │   ├── ProjectSection.jsx # Main grid layout for projects
│   │   └── ContactSection.jsx # Contact info, map, social links
│   ├── data/
│   │   ├── contactData.jsx
│   │   ├── projectsData.jsx
│   │   └── skillsData.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── index.css            # Design system + light mode overrides
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## 🎯 Featured Projects

### 1. 🤖 SmartDoc AI
> RAG-powered document intelligence platform

- Google Gemini AI + LangChain for Q&A over uploaded PDFs/Word files
- Smart Citation: click source → auto-scrolls to the exact PDF page
- Background OCR jobs via BullMQ + Redis
- User quota dashboard (Recharts) & Admin control panel
- **Stack:** Next.js 14, Node.js, MongoDB Atlas, Supabase, Redis

🔗 [GitHub](https://github.com/NgoXCuong/smartdoc-ai)

---

### 2. ⌚ Chronos Watch
> Full-featured e-commerce platform for premium watches

- Full order flow: browse → cart → checkout → VNPay payment
- AI-powered product advisor & smart search
- Admin dashboard: revenue stats, inventory, Excel export
- Product reviews, vouchers & discount codes
- **Stack:** React, Vite, Node.js, Express, MySQL, Sequelize, Cloudinary

🔗 [GitHub](https://github.com/NgoXCuong/chronos-watch)

---

### 3. ✅ ZenTask Todo App
> Modern collaborative task management system

- Kanban board with Drag & Drop (To Do → In Progress → Done)
- Workspaces with role-based access (Owner / Admin / Member)
- Markdown comments, file attachments & real-time notifications
- PDF report export & email reminders
- **Stack:** React 18, Node.js, Express 5, MySQL, JWT, Nodemailer

🔗 [GitHub](https://github.com/NgoXCuong/zentask-todo-app)

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repo
git clone https://github.com/NgoXCuong/portfolio_nc.git

# Install dependencies
npm install

# Start dev server
npm run dev
```

App runs at **http://localhost:5173**

### Build for production

```bash
npm run build
npm run preview
```

---

## 🎨 Design System

The UI is built on a custom CSS design system (`index.css`) with:

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| Primary | `#00f5ff` (Cyan) | `#0891b2` |
| Secondary | `#a855f7` (Purple) | `#7c3aed` |
| Background | `#020817` | `#f8fafc` |
| Card | `rgba(6,20,50,0.7)` glassmorphism | `rgba(255,255,255,0.92)` |

Key CSS utilities: `.glass-card`, `.btn-neon`, `.btn-solid-neon`, `.skill-badge`, `.soft-tag`, `.heading-gradient`, `.section-label`, `.input-cyber`

---

## 📬 Contact

| | |
|--|--|
| 📧 Email | ngocuongcm2005@gmail.com |
| 📱 Phone | +84 388 545 085 |
| 🐙 GitHub | [@NgoXCuong](https://github.com/NgoXCuong) |
| 💼 LinkedIn | [Ngô Xuân Cường](https://www.linkedin.com/in/cường-ngô-xuân-807485329/) |
| 📸 Instagram | [@__nc_it__](https://www.instagram.com/__nc_it__/) |

---

<p align="center">
  Made with ❤️ by <strong>Ngô Xuân Cường</strong> · 2026
</p>
