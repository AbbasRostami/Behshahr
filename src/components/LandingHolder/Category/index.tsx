import React from "react";
import categorty1 from "./../../../assets/svg/Landing/category1.svg";
import categorty2 from "./../../../assets/svg/Landing/category2.svg";
import categorty3 from "./../../../assets/svg/Landing/category3.svg";
import categorty4 from "./../../../assets/svg/Landing/category4.svg";
import categorty5 from "./../../../assets/svg/Landing/category5.svg";

const categoryData = [
  {
    icon: categorty1,
    title: "دوره های طراحی UI/UX",
    count: 28,
  },
  {
    icon: categorty2,
    title: "دوره های طراحی UI/UX",
    count: 182,
  },
  {
    icon: categorty3,
    title: "دوره های طراحی UI/UX",
    count: 81,
  },
  {
    icon: categorty4,
    title: "دوره های طراحی UI/UX",
    count: 52,
  },
  {
    icon: categorty5,
    title: "دوره های طراحی UI/UX",
    count: 52,
  },
];

const Category: React.FC = () => {
  return (
    <section dir="rtl" className="my-10">
      <div className="px-4 text-center leading-10 dark:text-white">
        <p className="mt-10 text-[28px] font-bold lg:text-[35px]">دسته بندی</p>
        <p className="leading-8 lg:leading-10">
          ما فرصت آماده شدن برای زندگی را فراهم می کنیم
        </p>
      </div>

      <div className="mx-4 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mx-8 md:grid-cols-3 lg:mx-16 lg:mt-16 lg:grid-cols-5">
        {categoryData.map((item) => (
          <div
            key={`${item.title}-${item.count}`}
            className="flex flex-col items-center rounded-md bg-[#FBF6F6] p-6 text-center text-TextGreen transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:text-white lg:p-10"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-16 w-16 object-contain"
            />
            <p className="mt-4 leading-7 text-black dark:text-white">
              {item.title}
            </p>
            <p className="mt-5 text-2xl font-medium text-black dark:text-white">
              {item.count}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Category };
