import { Field, Form, Formik } from "formik";
import React from "react";
import SugLogo from "./../../../assets/svg/Landing/SuggestionsLogo.svg";

const inputClassName =
  "w-full rounded-md border-2 border-TextGreen bg-[#FBF6F6] px-4 text-right text-sm text-[#21394B] placeholder-TextGray outline-none transition focus:border-green-600 dark:bg-slate-700 dark:text-white dark:placeholder-TextWhite";

const Suggestions: React.FC = () => {
  return (
    <section className="mt-16 lg:mt-24">
      <div dir="rtl" className="px-4 text-center leading-10 dark:text-white">
        <p className="text-[28px] font-bold lg:text-[35px]">
          پیشنهادات و انتقادات
        </p>
        <p className="mt-3 leading-8 lg:leading-10">
          نظرات خود را با ما درمیان بگذارید
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center gap-8 px-4 lg:mt-12 lg:flex-row lg:justify-between lg:px-8">
        <div className="w-full lg:w-1/2">
          <img
            src={SugLogo}
            alt="پیشنهادات و انتقادات"
            className="mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px]"
          />
        </div>

        <div dir="rtl" className="w-full lg:w-1/2">
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
            <Form className="mx-auto w-full max-w-[500px]">
              <div className="flex flex-col gap-3">
                <Field
                  className={`${inputClassName} h-[50px]`}
                  placeholder="نام و نام خانوادگی"
                  name="name"
                  autoComplete="name"
                />

                <Field
                  className={`${inputClassName} h-[50px]`}
                  placeholder="آدرس ایمیل"
                  name="email"
                  type="email"
                  autoComplete="email"
                />

                <Field
                  as="textarea"
                  rows={5}
                  className={`${inputClassName} min-h-[110px] py-3 resize-none`}
                  placeholder="متن..."
                  name="message"
                />

                <button
                  type="submit"
                  className="mt-4 h-[45px] w-full rounded-lg bg-BgGreen text-[#21394B] transition hover:opacity-90 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  ارسال
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export { Suggestions };
