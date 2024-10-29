import React from "react";
import { Formik, Field, Form } from "formik";

import Address from "./../../assets/address.svg"
import Phone from "./../../assets/phone.svg"
import Email from "./../../assets/email.svg"



const AboutForm = () => {
  return (
    <div>
      <div className="flex justify-around items-center ">
        <div>
          <Formik>
            <Form>
              <div
                className=" flex flex-col items-center mt-10 w-[37rem] h-[30rem] relative rounded-[1.5rem]
                                                          shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] bg-[#FBF6F6] dark:bg-gray-800"
              >
                <Field
                  className="bg-[#FFFFFF] dark:bg-gray-700 dark:text-white dark:placeholder-slate-300 rtl mt-10 placeholder-[#807A7A] h-[50px] w-[450px] border-solid border border-TextGreen rounded-md "
                  placeholder="  نام و نام خانواگی"
                ></Field>

                <Field
                  className="bg-[#FFFFFF] dark:bg-gray-700 dark:text-white dark:placeholder-slate-300 rtl mt-5 placeholder-[#807A7A]  h-[50px] w-[450px] border-solid border border-TextGreen rounded-md"
                  placeholder="  ایمیل آدرس"
                ></Field>

                <Field
                  className="bg-[#FFFFFF] dark:bg-gray-700 dark:text-white dark:placeholder-slate-300 rtl my-5 placeholder-[#807A7A]  h-[50px] w-[450px] border-solid border border-TextGreen rounded-md"
                  placeholder="  شماره تماس"
                ></Field>

                <Field
                  className="bg-[#FFFFFF] dark:bg-gray-700 dark:text-white dark:placeholder-slate-300 rtl placeholder-[#807A7A] items-start h-[160px] w-[450px] border-solid border border-TextGreen rounded-md "
                  placeholder="  متن..."
                ></Field>

                <button
                  class="w-[120px] h-[40px] dark:bg-gray-700 dark:text-white dark:hover:bg-green-300
                                     text-[#21394B] bg-BgGreen rounded-lg absolute right-[4.5rem] bottom-4"
                >
                  ارسال
                </button>
              </div>
            </Form>
          </Formik>
        </div>


  
 
        <div className="md:w-1/2 p-6 flex flex-col justify-center dark:text-white">


        <div>
            <p className="mr-5 mt-9 rtl  dark:text-white text-black text-2xl">با ما در ارتباط باشید</p>
            <p className="mr-5 mt-3 rtl dark:text-white text-TextGray">
              لورم ایپسوم بسیار فراگیر است زیرا بسیار همه کاره است. تعداد
              پاراگراف‌هایی را که می‌خواهید انتخاب کنید، کپی کنید
            </p>
          </div> 


          <div className="rtl flex items-start mt-5 pb-6">
            <div className="bg-[#FBF6F6] p-3 rounded-[15px]">
              <img src={Address} />
            </div>
            <div className="dark:text-white pr-4">
              <p className=" text-lg mt-7">آدرس و ساعت کاری</p>
              <p className="dark:text-white text-sm text-gray-500">
                ساری ، بلوارخزر، ششصد دستگاه، آموزشگاه بحر ، دوشنبه - جمعه 8:00
                - 18:00
              </p>
            </div>
          </div>

          <div className="rtl flex items-start pb-6">

            <div className="bg-[#FBF6F6] p-3 rounded-[15px]">
              <img src={Phone} />
            </div>

            <div className=" pr-4">
              <p className=" text-lg mt-7">شماره تماس</p>
              <p className="text-sm text-gray-500 dark:text-white">011-33883358</p>
            </div>

          </div>

          <div className="rtl flex items-start pb-6">
            <div className="bg-[#FBF6F6] p-3 rounded-[15px]">
              <img src={Email} />
            </div>
            <div className="pr-4">
              <p className=" text-lg mt-4">آدرس ایمیل</p>
              <p className="text-sm text-gray-500 dark:text-white">bahr_academy@gmail.com</p>
            </div>
          </div>
        </div>









      </div>
    </div>
  );
};

export { AboutForm };
