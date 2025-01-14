import React from "react";
import { Formik, Field, Form } from "formik";
import SugLogo from "./../../../assets/svg/Landing/SuggestionsLogo.svg";

const Suggestions: React.FC = () => {
  return (
    <>
      <div className="text-center leading-10 mt-24 dark:text-white">
        <p className="text-[35px] font-xl">پیشنهادات و انتقادات</p>
        <p className="leading-10 mt-3">نظرات خود را با ما درمیان بگذارید</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly items-center mt-4 mx-28">
        <div className="">
          <img src={SugLogo} alt="" />
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className=" flex flex-col items-end h-full">
              <Field
                className="bg-[#FBF6F6] dark:bg-slate-700 rtl placeholder-TextGray dark:placeholder-TextWhite h-[50px] w-[500px] px-4 border-solid border-2 border-TextGreen rounded-md "
                placeholder="نام و نام خانواگی"
                name="name"
              ></Field>

              <Field
                className="bg-[#FBF6F6] dark:bg-slate-700 rtl placeholder-TextGray dark:placeholder-TextWhite my-3 h-[50px] w-[500px] px-4 border-solid border-2 border-TextGreen rounded-md"
                placeholder="ایمیل آدرس"
                name="email"
              ></Field>

              <Field
                className="bg-[#FBF6F6] dark:bg-slate-700 rtl placeholder-TextGray dark:placeholder-TextWhite items-start h-[110px] w-[500px] px-4 border-solid border-2 border-TextGreen rounded-md "
                placeholder="متن..."
                rows="2"
                name="message"
                as="textarea"
              ></Field>

              <button
                className="w-[500px] h-[45px]
                      //  text-[#21394B] bg-BgGreen dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 rounded-lg mt-8"
              >
                ارسال
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export { Suggestions };
