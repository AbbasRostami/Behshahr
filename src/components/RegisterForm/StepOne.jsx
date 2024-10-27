import React from "react";
import registerStepOne from "../../assets/registerStepOne.svg";
import home from "../../assets/home.svg";
import { Field, Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { SendVerifyMessage } from "../../core/api/register";
// import { toast } from "react-toastify";
import { postApi } from "../../core/api/api";

const StepOne = () => {
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    console.log("ارسال: ", values);
    const path = "/Sign/SendVerifyMessage";
    const body = values;
    const response = await postApi({ path, body });
    console.log(response);

    if (response.status === 200) {
      toast.success("کد با موفقیت برای شما ارسال شد");
      navigate("/register-verify", { state: values });
    } else {
      response?.response?.data?.ErrorMessage?.map((item) => {
        toast.error(item);
      });
    }
  };

  return (
    <div className="flex m-auto h-[32rem] w-[43rem] lg:w-[50rem] mt-[5rem] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]">
      <div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg hidden lg:flex">
        <img className="m-auto h-[31rem]" src={registerStepOne} alt="" />
      </div>

      <div className=" relative w-[40rem] lg:w-[25rem] mx-auto bg-[#eeeaea] rounded-r-lg shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] ">
        <img src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[1.5rem] text-[23px]">
          ثبت نام
        </h2>
        <Formik onSubmit={registerHandler} initialValues={{ phoneNumber: "" }}>
          <Form>
            <Field
              placeholder="شماره همراه"
              className="pr-9 ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl text-black w-[37rem] lg:w-[22rem] h-[3rem] mt-[1.6rem] "
              type="text"
              name="phoneNumber"
            />

            <svg
              className=" absolute top-[7.5rem] right-8"
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

            <button
              className="w-[37rem] lg:w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-[7.2rem] ml-7 text-[#ffff]"
              type="submit"
            >
              ادامه
            </button>
          </Form>
        </Formik>

        <Link to="/">
          {" "}
          <button className="w-[37rem] lg:w-[22rem] h-[3.4rem] border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ml-7">
            بازگشت به صفحه اصلی
          </button>
        </Link>

        <Link to="/register">
          <h3 className="text-sm text-[#22445D] hover:underline  text-right cursor-pointer mt-8 mr-9">
            من از قبل عضو هستم
          </h3>
        </Link>
      </div>
    </div>
  );
};

export { StepOne };
