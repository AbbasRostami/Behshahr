import React from "react";
import { Field, Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
// import { loginAPI } from "../../core/services/api/auth";
import login2Pick from "../../assets/loginPick2.svg";
import home from "../../assets/home.svg";
import loginPick from "../../assets/loginPick.svg";
import { useState } from "react";
import { postApi } from "../../core/api/api";
import { toast } from "react-toastify";
import phoneIcon from "../../assets/phoneIcon.svg";
import keyIcon from "../../assets/keyIcon.svg";

const LoginForm = () => {
  const navigate = useNavigate();
  const loginHandler = async (values) => {
    console.log(values);
    const path = "/Sign/Login";
    const body = values;

    const response = await postApi({ path, body });
    console.log(response);
    if (response?.data?.success) {
      localStorage.setItem("token", response?.data?.token);
      toast.success("شما با موفقیت وارد شدید.");
      navigate("/");

    } else {
      toast.error(response?.data?.message);
    }
  };

  const [show, setShow] = useState(false);

  return (
    <>
      {show ? (
        <div className="flex m-auto h-[32rem] w-[50rem] mt-[5rem] ">
          <div
            // onClick={() => setShow(!show)}
            className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg"
          >
            <img className="m-auto h-[31rem] " src={login2Pick} alt="" />
          </div>

          <div className="w-[25rem] bg-[#eeeaea] rounded-r-lg shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] ">
            <img src={home} alt="" />

            <h2 className="text-right mr-6 text-[#22445D] mt-[2.5rem] text-[23px]">
              ورود به سیستم
            </h2>

            <Formik
              onSubmit={loginHandler}
              initialValues={{
                VerifyCode: "",
                rememberMe: true,
              }}
            >
              <Form>
                <Field
                  placeholder="کد تایید   "
                  className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.6rem] "
                  type="text"
                  name="VerifyCode"
                />

                <Field
                  className="h-[2px] w-[2px]"
                  type="checkbox"
                  name="rememberMe"
                  placeholder="مرا به خاطر بسپار"
                />

                <button
                  className=" ml-7 w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-[7.2rem] text-[#ffff]"
                  type="submit"
                >
                  ادامه
                </button>
              </Form>
            </Formik>

            <Link to="/">
              <button className="ml-7 w-[22rem] h-[3.4rem] border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ">
                بازگشت به صفحه اصلی
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex  m-auto h-[32rem] w-[50rem] mt-[5rem] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]">
          <div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg ">
            <img className="m-auto h-[31rem]" src={loginPick} alt="" />
          </div>

          <div className="relative w-[25rem] bg-[#eeeaea] rounded-r-lg shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] ">
            <img src={home} alt="" />

            <h2 className="text-right mr-6 text-[#22445D] mt-[1.5rem] text-[23px]">
              ورود به سیستم
            </h2>

            <Formik
              onSubmit={loginHandler}
              initialValues={{
                phoneOrGmail: "",
                password: "",
                rememberMe: true,
              }}
            >
              <Form>
                <Field
                  placeholder="شماره همراه"
                  className=" pr-9 bg-auto bg-no-repeat bg-center ... ml-7 border-solid border border-[#158B68] text-right rounded-xl  text-black w-[22rem] h-[3rem] mt-[1.6rem] "
                  type="text"
                  name="phoneOrGmail"
                />
                <svg
                  className=" absolute top-[8rem] right-8"
                  width="15"
                  height="25"
                  viewBox="0 0 20 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.4292 1.49854H4.2146C2.43923 1.49854 1 2.93776 1 4.71314V28.2869C1 30.0622 2.43923 31.5015 4.2146 31.5015H14.9299C16.7053 31.5015 18.1445 30.0622 18.1445 28.2869V4.71314C18.1445 2.93776 16.7053 1.49854 14.9299 1.49854H11.7153M7.4292 1.49854V3.6416H11.7153V1.49854M7.4292 1.49854H11.7153M7.4292 28.2869H11.7153"
                    stroke="#158B68"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <Field
                  placeholder="رمز عبور"
                  className="ml-7 pr-10 border-solid border border-[#158B68] text-right rounded-xl  text-black w-[22rem] h-[3rem] mt-[0.7rem]"
                  type="text"
                  name="password"
                />
                <svg
                  className=" absolute top-[190px] right-8"
                  width="20"
                  height="25"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.333 4.92738C20.4364 4.92738 22.1416 6.63255 22.1416 8.73598M25.9502 8.73598C25.9502 10.986 24.9564 13.1199 23.2352 14.5672C21.515 16.0141 19.2422 16.6271 17.0267 16.2414C16.3119 16.1183 15.5553 16.2745 15.0424 16.7873L11.668 20.1618H8.81152V23.0182H5.95508V25.8747H1.19434V22.2971C1.19434 21.5392 1.49521 20.8118 2.03096 20.2773L10.2816 12.0266C10.7945 11.5137 10.9507 10.7571 10.8275 10.0423C10.3367 7.20778 11.4845 4.33849 13.795 2.62466C16.1055 0.910836 19.1845 0.644868 21.7546 1.93709C24.3248 3.2293 25.9477 5.85925 25.9502 8.73598Z"
                    stroke="#158B68"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <label className="flex justify-start items-center rtl mt-5 mr-6">
                  <input className="size-4" type="checkbox" />
                  <p className="mr-3"> مرا به خاطر بسپار </p>
                </label>

                <button
                  className="w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-7 ml-7 text-[#ffff]"
                  type="submit"
                >
                  تایید
                </button>
              </Form>
            </Formik>

            <Link to="/">
              {" "}
              <button className="w-[22rem] h-[3.4rem] border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ml-7">
                بازگشت به صفحه اصلی
              </button>
            </Link>

            <div className="flex justify-between items-center mx-8 mt-8">
              <Link to="/forget-password">
                {" "}
                <h4 className="text-sm ml-3 hover:underline text-bold text-[#22445D] cursor-pointer">
                  {" "}
                  فراموشی رمز
                </h4>
              </Link>

              <Link to="/register">
                <h3 className="text-sm hover:underline text-bold text-[#22445D] cursor-pointer">
                  یک حساب کاربری ایجاد کنید
                </h3>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { LoginForm };
