import { Formik, Field, Form } from "formik";
import { MdMarkEmailRead } from "react-icons/md";
import { BiHome, BiPhoneCall } from "react-icons/bi";

const AboutForm: React.FC = () => {
  const aboutData = {
    title: "با ما در ارتباط باشید",
    desc: "لورم ایپسوم بسیار فراگیر است زیرا بسیار همه کاره است. تعداد پاراگراف‌هایی را که می‌خواهید انتخاب کنید، کپی کنید",
    address: "آدرس و ساعت کاری",
    adressDesc:
      "ساری ، بلوارخزر، ششصد دستگاه، آموزشگاه بحر ، دوشنبه - جمعه 8:00 - 18:00",
    phone: "شماره تماس",
    phoneNumber: "011-33883358",
    email: "آدرس ایمیل",
    emailAddress: "bahr_academy@gmail.com",
  };

  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <Formik
            initialValues={{
              fname: "",
              email: "",
              phone: "",
              text: "",
            }}
            onSubmit={(value) => console.log(value)}
          >
            <Form>
              <div
                className=" flex flex-col items-center mt-10 w-[25rem] lg:w-[37rem] h-[30rem] relative rounded-[1.5rem]
                           shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] bg-[#FBF6F6] dark:bg-gray-800"
              >
                <Field
                  className="bg-[#FFFFFF] pr-2 dark:bg-gray-700 dark:text-white dark:placeholder-slate-300 rtl mt-10 placeholder-[#807A7A] h-[50px] w-[20rem] border-solid border border-TextGreen rounded-md "
                  placeholder="نام و نام خانواگی"
                  name="fname"
                ></Field>

                <Field
                  className="bg-[#FFFFFF] pr-2 dark:bg-gray-700 dark:text-white dark:placeholder-slate-300 rtl mt-5 placeholder-[#807A7A] h-[50px] w-[20rem] border-solid border border-TextGreen rounded-md"
                  placeholder="ایمیل آدرس"
                  name="email"
                ></Field>

                <Field
                  className="bg-[#FFFFFF] pr-2pr-2 dark:bg-gray-700 dark:text-white dark:placeholder-slate-300 rtl my-5 placeholder-[#807A7A] h-[50px] w-[20rem] border-solid border border-TextGreen rounded-md"
                  placeholder="شماره تماس"
                  name="phone"
                ></Field>

                <Field
                  className="bg-[#FFFFFF] pr-2 dark:bg-gray-700 dark:text-white dark:placeholder-slate-300 rtl placeholder-[#807A7A] items-start h-[160px] w-[20rem] border-solid border border-TextGreen rounded-md "
                  placeholder="متن..."
                  name="text"
                ></Field>

                <button
                  type="submit"
                  className="w-[20rem] h-[40px] dark:bg-gray-700 dark:text-white dark:hover:bg-green-300
                        text-[#21394B] bg-BgGreen rounded-lg mt-4"
                >
                  ارسال
                </button>
              </div>
            </Form>
          </Formik>
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-center dark:text-white">
          <div>
            <p className="mr-5 mt-9 rtl  dark:text-white text-black text-2xl">
              {aboutData.title}
            </p>
            <p className="mr-5 mt-3 rtl dark:text-white text-TextGray">
              {aboutData.desc}
            </p>
          </div>

          <div className="rtl flex items-start mt-5 pb-6">
            <div className="bg-[#FBF6F6] p-3 rounded-[15px] dark:bg-gray-700">
              <BiHome size={85} />
            </div>

            <div className="dark:text-white pr-4">
              <p className=" text-lg mt-7">{aboutData.address}</p>
              <p className="dark:text-white text-sm text-gray-500">
                {aboutData.adressDesc}
              </p>
            </div>
          </div>

          <div className="rtl flex items-start pb-6">
            <div className="bg-[#FBF6F6] p-3 rounded-[15px] dark:bg-gray-700">
              <BiPhoneCall size={85} className="h-[3rem] lg:h-full" />
            </div>

            <div className=" pr-4">
              <p className=" text-lg mt-7">{aboutData.phone}</p>
              <p className="text-sm text-gray-500 dark:text-white">
                {aboutData.phoneNumber}
              </p>
            </div>
          </div>

          <div className="rtl flex items-start pb-6">
            <div className="bg-[#FBF6F6] p-3 rounded-[15px] dark:bg-gray-700">
              <MdMarkEmailRead size={85} className="h-[2.5rem] lg:h-full" />
            </div>

            <div className="pr-4">
              <p className=" text-lg mt-4">{aboutData.email}</p>
              <p className="text-sm text-gray-500 dark:text-white">
                {aboutData.emailAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutForm };
