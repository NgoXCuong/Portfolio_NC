import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="sm:h-screen relative z-10 container mx-auto px-6 md:px-20 flex flex-col gap-10 w-full mt-0 sm:mt-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-8">
            Liên Hệ
          </h2>
          <p className="text-lg  text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Mình luôn sẵn sàng kết nối và trao đổi về cơ hội hợp tác, dự án
            freelance hoặc chia sẻ kiến thức. Hãy gửi lời nhắn hoặc kết nối qua
            mạng xã hội nhé!
          </p>
        </div>

        {/* Grid chia 2 cột */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: (
                  <Mail className="  w-6 h-6 text-blue-600 dark:text-blue-300" />
                ),
                label: "Email",
                value: "ngocuongcm2005@gmail.com",
                bg: "bg-blue-100 dark:bg-blue-900",
              },
              {
                icon: (
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-300" />
                ),
                label: "Điện thoại",
                value: "+84 388 545 085",
                bg: "bg-green-100 dark:bg-green-900",
              },
              {
                icon: (
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                ),
                label: "Địa chỉ",
                value: "Tp. Hà Nội, Việt Nam",
                bg: "bg-purple-100 dark:bg-purple-900",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={`p-3 ${item.bg} rounded-xl`}>{item.icon}</div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.label}
                  </p>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Social Icons */}
            <div className="pt-6">
              <p className="text-gray-600 dark:text-gray-300 mb-3 font-medium">
                Kết nối với mình:
              </p>
              <div className="flex gap-5">
                {[
                  {
                    icon: <Facebook />,
                    link: "https://www.facebook.com/namay.changtrai.1428921",
                    color: "hover:text-blue-600",
                  },
                  {
                    icon: <Github />,
                    link: "https://github.com/NgoXCuong",
                    color: "hover:text-gray-800 dark:hover:text-gray-200",
                  },
                  {
                    icon: <Linkedin />,
                    link: "https://www.linkedin.com/in/c%C6%B0%E1%BB%9Dng-ng%C3%B4-xu%C3%A2n-807485329/",
                    color: "hover:text-blue-500",
                  },
                  {
                    icon: <Instagram />,
                    link: "https://www.instagram.com/__nc_it__/",
                    color: "hover:text-pink-500",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl transition-transform transform hover:scale-125 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
            <iframe
              title="Hanoi Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.970236348145!2d105.7640263758415!3d21.033876887601682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0bf0f1742f%3A0xe820ab53e8c05841!2zS8O9IFTDumMgWMOhIE3hu7kgxJDDrG5o!5e0!3m2!1svi!2s!4v1760261989245!5m2!1svi!2s"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
