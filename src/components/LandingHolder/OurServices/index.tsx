import our1 from "./../../../assets/svg/Landing/our1.svg";
import our2 from "./../../../assets/svg/Landing/our2.svg";
import our3 from "./../../../assets/svg/Landing/our3.svg";
import our4 from "./../../../assets/svg/Landing/our4.svg";
import our6 from "./../../../assets/svg/Landing/our5.svg";
import our5 from "./../../../assets/svg/Landing/our6.svg";

const OurServices: React.FC = () => {

  const OurServicesData = [
    {
      icon: our1,
      title: "اساتید مجرب",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .",
    },
    {
      icon: our2,
      title: "مشاوره رایگان",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .",
    },
    {
      icon: our3,
      title: "فرصت های شغلی",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .",
    },
    {
      icon: our4,
      title: "ارائه مدرک معتبر",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .",
    },
    {
      icon: our5,
      title: "دوره های جامع و متنوع",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .",
    },
    {
      icon: our6,
      title: "آموزش پروژه محور",
      desc: "لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .",
    },
  ];
  
  return (
    <>
      <div className="text-center leading-10 dark:text-white">
        <p className="text-[35px] font-bold mt-10">خدمات ما</p>
        <p className="leading-10">
          ما فرصت آماده شدن برای زندگی را فراهم می کنیم
        </p>
      </div>

      <div className="px-16 py-16  text-[#22445D] grid grid-col-2 lg:grid-cols-3 gap-2 rtl">
        {OurServicesData.map((item, index) => (
          <div
            key={index}
            className="rounded p-5 bg-rd transition ease-in-out delay-150 hover:text-yellow-950 hover:text-lg hover:-translate-y-1 hover:scale-110  duration-300 ... "
          >
            <div className="flex justify-center items-center hover:border hover:bg-slate-100 hover:shadow-2xl dark:hover:bg-gray-800">
              <img src={item.icon} alt="" loading="lazy" />
              <div className="mr-5 dark:text-white ">
                <p className="leading-10">{item.title}</p>
                <p className="text-sm dark:text-white">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { OurServices };
