import React from "react";

const projects = [
  {
    id: 1,
    title: "Todo List",
    subtitle: "Dự án 1",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Trang Thông Tin Công Nghệ",
    subtitle: "Dự án 2",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Spotify Clone",
    subtitle: "Dự án 3",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative flex items-center justify-center min-h-screen
                 text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6 md:px-20 mt-20 sm:mt-5">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-3">
            Dự Án Cá Nhân
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Những dự án này không chỉ là bài tập, mà là hành trình mình khám phá
            giới hạn của bản thân, thử nghiệm ý tưởng mới và tạo ra sản phẩm
            mang đậm dấu ấn riêng.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white/70 dark:bg-gray-800/70 rounded-2xl overflow-hidden shadow-md 
                   hover:shadow-xl transition-transform duration-500 hover:-translate-y-1 cursor-pointer backdrop-blur-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-60 sm:h-64 md:h-72 object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <p className="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wide mb-1">
                  {p.subtitle}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
