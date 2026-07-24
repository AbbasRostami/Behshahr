import React from "react";
import our1 from "./../../../assets/svg/Landing/our1.svg";
import our2 from "./../../../assets/svg/Landing/our2.svg";
import our3 from "./../../../assets/svg/Landing/our3.svg";
import our4 from "./../../../assets/svg/Landing/our4.svg";
import our5 from "./../../../assets/svg/Landing/our5.svg"; // اصلاح شد
import our6 from "./../../../assets/svg/Landing/our6.svg"; // اصلاح شد

// دیتا رو آوردیم بیرون که تو هر رندر دوباره ساخته نشه (سرعت بهتر)
const OurServicesData = [
  {
    icon: our1,
    title: "اساتید مجرب",
    desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.",
  },
  {
    icon: our2,
    title: "مشاوره رایگان",
    desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.",
  },
  {
    icon: our3,
    title: "فرصت های شغلی",
    desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.",
  },
  {
    icon: our4,
    title: "ارائه مدرک معتبر",
    desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.",
  },
  {
    icon: our5,
    title: "دوره های جامع و متنوع",
    desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.",
  },
  {
    icon: our6,
    title: "آموزش پروژه محور",
    desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.",
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="text-center dark:text-white px-4">
        <h2 className="text-[28px] lg:text-[35px] font-bold mt-10 mb-2">
          خدمات ما
        </h2>
        <p className="leading-8 text-gray-600 dark:text-gray-300">
          ما فرصت آماده شدن برای زندگی را فراهم می کنیم
        </p>
      </div>

      {/* 
        تو موبایل 1 ستون، تبلت 2 ستون، دسکتاپ 3 ستون 
        پدینگ موبایل px-4 شد که جا باز بشه
      */}
      <div className="px-4 md:px-8 lg:px-16 py-12 text-[#22445D] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rtl">
        {OurServicesData.map((item, index) => (
          <div
            key={index}
            /* افکت‌های هاور رو یکپارچه کردم که صفحه پرش نداشته باشه */
            className="group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-slate-50 hover:shadow-xl dark:hover:bg-gray-800"
          >
            <img
              src={item.icon}
              alt={item.title}
              loading="lazy"
              className="w-16 h-16 shrink-0"
            />

            <div className="dark:text-white">
              <p className="text-lg font-bold mb-2 group-hover:text-yellow-700 dark:group-hover:text-yellow-500 transition-colors">
                {item.title}
              </p>
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { OurServices };
