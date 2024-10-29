import React, { useState } from "react";
import forgetPassword from "./../../assets/forgetPassword.svg";
import { Field, Form, Formik } from "formik";
import home from "./../../assets/home.svg";
import { postApi } from "../../core/api/api";
import { Link, useNavigate } from "react-router-dom";
import { usePass } from "../../core/provider/PasswoedProvider";
import { toast } from "react-toastify";

const ForgetStepOne = () => {
  const [isDisable, setIsDisable] = useState(false);
  



  const forgetHandler = async (values) => {
    setIsDisable(true);
    console.log(values);

    const path = "/Sign/ForgetPassword";

    const body = { ...values, baseUrl: "http://localhost:5173/reset-password" };

    const response = await postApi({ path, body });
    console.log(response)
    if (response?.data?.success) {
      const myJSON = JSON.stringify(response);
      localStorage.setItem("pass", myJSON);
      toast.success("لینک به ایمیل شما ارسال شد.")
      
    } else {
      response?.response?.data?.ErrorMessage?.map((item) => {
        toast.error(item);

      });
    }
    setIsDisable(false);
  };

  return (
    <div className="flex m-auto h-[32rem] w-[43rem] lg:w-[50rem] mt-[5rem] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]">
      <>
        {" "}
        <div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-md hidden lg:flex">
          <img
            className="m-auto h-[28rem] w-[23rem]"
            src={forgetPassword}
            alt=""
          />
        </div>
        <div className=" relative w-[40rem] lg:w-[25rem] mx-auto bg-[#eeeaea] rounded-r-md ">
          <img src={home} alt="" />
          <h2 className="text-right mr-6 text-[#22445D] mt-[2.5rem] text-[23px] ">
            ورود به سیستم
          </h2>
          <Formik onSubmit={forgetHandler} initialValues={{ email: "" }}>
            <Form>
              <Field
                placeholder="ایمیل خودرا وارد کنید"
                className="border-solid border-2 pr-9 ml-5 border-[#158B68] text-right rounded-xl  text-black w-[37rem] lg:w-[22rem] h-[3rem] mt-[1.6rem] "
                type="text"
                name="email"
              />

<svg className="absolute top-[147px] right-[37px]" width="20" height="25" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.0222 13.5005C20.0222 16.9175 17.2522 19.6875 13.8352 19.6875C10.4182 19.6875 7.64821 16.9175 7.64821 13.5005C7.64821 10.0836 10.4182 7.31357 13.8352 7.31357C17.2522 7.31357 20.0222 10.0836 20.0222 13.5005ZM20.0222 13.5005C20.0222 15.7787 21.4067 17.6252 23.1157 17.6252C24.8246 17.6252 26.2091 15.7787 26.2091 13.5005C26.2091 7.59736 22.0391 2.51614 16.2492 1.36446C10.4593 0.212813 4.66216 3.31148 2.40311 8.76543C0.144055 14.2194 2.05222 20.5096 6.96066 23.7893C11.8691 27.0689 18.4107 26.4246 22.585 22.2503M20.0222 13.5005V8.34473" stroke="#12926C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

              <button
                disabled={isDisable}
                className={`w-[37rem] lg:w-[22rem] h-[3.4rem] ml-5  rounded-xl mt-[7.2rem] text-[#ffff]  ${isDisable
                  ? "cursor-not-allowed bg-[#8b1529]"
                  : "cursor-pointer bg-[#158B68]"
                  }`}
                type="submit"
              >
                ادامه
              </button>
            </Form>
          </Formik>
          <Link to={'/'}>
            <button className="w-[37rem] lg:w-[22rem] h-[3.4rem] ml-5 border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ">
              بازگشت به صفحه اصلی
            </button>
          </Link>
        </div>
      </>
    </div>
  );
};

export { ForgetStepOne };
