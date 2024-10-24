import React from "react";
import forgetPassword from "./../../assets/forgetPassword.svg";
import { Field, Form, Formik } from "formik";
import home from "./../../assets/home.svg";
import { postApi } from "../../core/api/api";
import { Link } from "react-router-dom";

const StepOne = () => {

  const forgetHandler = async (values) => {
    console.log(values);
    
    const path = "/Sign/ForgetPassword";
    const body = { ...values, baseUrl: "https://localhost:5173/resetpassword" };

    const response = await postApi({ path, body });
    console.log(response);
  };

  return (
    <div className="flex m-auto h-[32rem] w-[50rem] mt-[5rem] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]">
      <div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-md ">
        <img
          className="m-auto h-[28rem] w-[23rem]"
          src={forgetPassword}
          alt=""
        />
      </div>

      <div className="w-[25rem] bg-[#eeeaea] rounded-r-md ">
        <img src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[2.5rem] text-[23px] ">
          ورود به سیستم
        </h2>
        <Formik onSubmit={forgetHandler} initialValues={{ email: "" }}>
          <Form>
            <Field
              placeholder="ایمیل خودرا وارد کنید     "
              className="border-solid border-2 ml-5 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.6rem] "
              type="text"
              name="email"
            />

            <button
              className="w-[22rem] h-[3.4rem] ml-5 bg-[#158B68] rounded-xl mt-[7.2rem] text-[#ffff]"
              type="submit"
            >
              ادامه
            </button>
          </Form>
        </Formik>

        <button className="w-[22rem] h-[3.4rem] ml-5 border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ">
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
};

export { StepOne };
