import React from "react";
import { Header } from "./../common/Header";
import { Footer } from "./../common/Footer";
import { Formik, Field, Form } from "formik";
import Email from "./../../assets/svg/aboutUs/IconEmail.svg";
import Phone from "./../../assets/svg/aboutUs/IconPhone.svg";
import Address from "./../../assets/svg/aboutUs/IconAddress.svg";

const AboutForm = () => {
  return (
    <>
    <div className="from-emerald-300/85 from-35% to-white ">
      <Header />
      </div>
      <div className="flex justify-around items-center px-28">
        <div>
          <Formik>
            <Form>
              <div
                className=" flex flex-col items-center mt-10 w-[33rem] h-[32rem] relative rounded-[1.5rem]
                                                          shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] bg-[#FBF6F6]"
              >
                <Field
                  className="bg-[#FFFFFF] rtl mt-10 placeholder-[#807A7A] h-[50px] w-[450px] border-solid border border-TextGreen rounded-md "
                  placeholder="  نام و نام خانواگی"
                ></Field>

                <Field
                  className="bg-[#FFFFFF] rtl mt-5 placeholder-[#807A7A]  h-[50px] w-[450px] border-solid border border-TextGreen rounded-md"
                  placeholder="  ایمیل آدرس"
                ></Field>

                <Field
                  className="bg-[#FFFFFF] rtl my-5 placeholder-[#807A7A]  h-[50px] w-[450px] border-solid border border-TextGreen rounded-md"
                  placeholder="  شماره تماس"
                ></Field>

                <Field
                  className="bg-[#FFFFFF] rtl placeholder-[#807A7A] items-start h-[160px] w-[450px] border-solid border border-TextGreen rounded-md "
                  placeholder="  متن پیام..."
                ></Field>

                <button
                  class="w-[120px] h-[40px]
                                     text-white bg-BgGreen rounded-lg absolute right-[2.5rem] bottom-10"
                >
                  ارسال
                </button>
              </div>
            </Form>
          </Formik>
        </div>



        <div class="flex flex-col items-center w-[26rem]">
          
          <div>
          <p className="mr-5 rtl text-TextGray text-2xl">با ما در ارتباط باشید</p>
          <p className="mr-5 mt-3 rtl text-TextGray">
            لورم ایپسوم بسیار فراگیر است زیرا بسیار همه کاره است. تعداد
            پاراگراف‌هایی را که می‌خواهید انتخاب کنید، کپی کنید
          </p>
          </div>
        
              <img className="mt-16" src={Address} alt="" />
              <img className="ml-[8rem] my-4" src={Phone} alt="" />
              <img className="ml-[8rem]" src={Email} alt="" />
        

             </div>



      </div>

      <Footer />
    </>
  );
};

export { AboutForm };
