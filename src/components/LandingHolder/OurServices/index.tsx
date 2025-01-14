import our1 from "./../../../assets/svg/Landing/our1.svg";
import our2 from "./../../../assets/svg/Landing/our2.svg";
import our3 from "./../../../assets/svg/Landing/our3.svg";
import our4 from "./../../../assets/svg/Landing/our4.svg";
import our6 from "./../../../assets/svg/Landing/our5.svg";
import our5 from "./../../../assets/svg/Landing/our6.svg";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="text-center leading-10 dark:text-white">
        <p className="text-[35px] font-bold mt-10">خدمات ما</p>
        <p className="leading-10">
          ما فرصت آماده شدن برای زندگی را فراهم می کنیم
        </p>
      </div>

      <div className="px-16 py-16  text-[#22445D] grid grid-col-2 lg:grid-cols-3 gap-2 rtl">
        <div className="rounded p-5 bg-rd transition ease-in-out delay-150 hover:text-yellow-950 hover:text-lg hover:-translate-y-1 hover:scale-110  duration-300 ... ">
          <div className="flex justify-center items-center hover:border hover:bg-slate-100 hover:shadow-2xl dark:hover:bg-gray-800">
            <img src={our1} alt="" />
            <div className="mr-5 dark:text-white ">
              <p className="leading-10">اساتید مجرب</p>
              <p className="text-sm dark:text-white">
                {" "}
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .
              </p>
            </div>
          </div>
        </div>

        <div className="rounded p-5 transition ease-in-out delay-150 hover:text-yellow-950 hover:text-lg hover:-translate-y-1 hover:scale-110  duration-300 ... ">
          <div className="flex justify-center items-center hover:border hover:bg-slate-100 hover:shadow-2xl dark:hover:bg-gray-800">
            <img src={our2} alt="" />
            <div className="mr-5 dark:text-white ">
              <p className="leading-10">مشاوره رایگان</p>
              <p className="text-sm dark:text-white">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .
              </p>
            </div>
          </div>
        </div>

        <div className="rounded p-5 transition ease-in-out delay-150 hover:text-yellow-950 hover:text-lg hover:-translate-y-1 hover:scale-110  duration-300 ... ">
          <div className="flex justify-center items-center hover:border hover:bg-slate-100 hover:shadow-2xl dark:hover:bg-gray-800">
            <img src={our3} alt="" />
            <div className="mr-5 dark:text-white ">
              <p className="leading-10">فرصت های شغلی</p>
              <p className="text-sm dark:text-white">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .
              </p>
            </div>
          </div>
        </div>

        <div className="rounded p-5 transition ease-in-out delay-150 hover:text-yellow-950 hover:text-lg hover:-translate-y-1 hover:scale-110  duration-300 ... ">
          <div className="flex justify-center items-center hover:border hover:bg-slate-100 hover:shadow-2xl dark:hover:bg-gray-800">
            <img src={our4} alt="" />
            <div className="mr-5 dark:text-white ">
              <p className="leading-10">ارائه مدرک معتبر</p>
              <p className="text-sm dark:text-white">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded p-5 transition ease-in-out delay-150 hover:text-yellow-950 hover:text-lg hover:-translate-y-1 hover:scale-110  duration-300 ... ">
          <div className="flex justify-center items-center hover:border hover:bg-slate-100 hover:shadow-2xl dark:hover:bg-gray-800">
            <img src={our5} alt="" />
            <div className="mr-5 dark:text-white ">
              <p className="leading-10">دوره های جامع و متنوع</p>
              <p className="text-sm dark:text-white">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded p-5 transition ease-in-out delay-150 hover:text-yellow-950 hover:text-lg hover:-translate-y-1 hover:scale-110  duration-300 ... ">
          <div className="flex justify-center items-center hover:border hover:bg-slate-100 hover:shadow-2xl dark:hover:bg-gray-800">
            <img src={our6} alt="" />
            <div className="mr-5 dark:text-white ">
              <p className="leading-10">آموزش پروژه محور</p>
              <p className="text-sm dark:text-white">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OurServices };
