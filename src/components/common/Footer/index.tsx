import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logoLanding from "./../../../assets/svg/Landing/logosite.svg";

const footerSections = [
  {
    title: "آموزشگاه",
    links: [
      { label: "درباره ما", href: "#" },
      { label: "ارتباط با ما", href: "#" },
    ],
  },
  {
    title: "قوانین و مقررات",
    links: [
      { label: "خدمات", href: "#" },
      { label: "آموزش ها", href: "#" },
    ],
  },
  {
    title: "خدمات و سرویس ها",
    links: [
      { label: "خدمات و سرویس ها", href: "#" },
      { label: "فرصت های شغلی", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    icon: FaFacebook,
    href: "#",
    label: "فیسبوک",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "اینستاگرام",
  },
  {
    icon: FaTwitter,
    href: "#",
    label: "توییتر",
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      dir="rtl"
      className="mt-16 w-full bg-gradient-to-r from-green-300 to-gray-50 px-4 py-8 sm:px-6 dark:bg-none dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="text-right">
            <a href="#" className="inline-flex items-center gap-3">
              <img
                src={logoLanding}
                className="h-10 w-auto"
                alt="لوگوی H-One"
              />
              <span className="whitespace-nowrap text-2xl font-semibold text-slate-700 dark:text-white">
                H-One
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-700 dark:text-slate-300">
              همراه شما در مسیر یادگیری، رشد و ورود حرفه‌ای‌تر به دنیای آموزش و
              تکنولوژی.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title} className="text-right">
                <h2 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h2>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-600 transition hover:text-[#12926C] dark:text-gray-400 dark:hover:text-green-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="my-6 h-px w-full bg-green-200/80 dark:bg-gray-700" />

        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-right">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 H-One. All Rights Reserved.
          </span>

          <div className="flex items-center justify-center gap-4 sm:justify-start">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#12926C] transition hover:bg-white hover:text-green-700 dark:bg-gray-800 dark:text-green-300 dark:hover:bg-gray-700"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
