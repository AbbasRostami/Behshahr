import React from "react";
import { Field, Form, Formik } from "formik";
import home from "./../../assets/home.svg";
import forgetPassword2 from "./../../assets/forgetPassword2.svg";
import { postApi } from "../../core/api/api";
import { usePass } from "../../core/provider/PasswoedProvider";

const ForgetStepThree = ({ id }) => {
  const { passId, setPassId } = usePass();
  console.log(passId);
  const forgetHandler = async (values) => {
    const path = "/Sign/Reset";

    const data = {
      userId: passId?.id,
      newPassword: values.newPassword,
      resetValue: passId?.message,
    };

    const response = await postApi({ path, body: data });
    console.log(response);
    if (response.success) {
      alert("boooos");
    } else {
      alert("kooooft");
    }
  };

  return (
    <div className="flex m-auto h-[32rem] w-[43rem] lg:w-[50rem] mt-[5rem] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]">
      <div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-md hidden lg:flex">
        <img
          className="m-auto h-[28rem] w-[23rem]"
          src={forgetPassword2}
          alt=""
        />
      </div>

      <div className="w-[40rem] lg:w-[25rem] mx-auto bg-[#eeeaea] rounded-r-md ">
        <img src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[2.5rem] text-[23px] ">
          ورود به سیستم
        </h2>
        <Formik
          onSubmit={forgetHandler}
          initialValues={{ newPassword: "", resetValue: "" }}
        >
          <Form>
            <Field
              placeholder="رمز عبور       "
              className="border-solid border-2 ml-5 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[37rem] lg:w-[22rem] h-[3rem] mt-[1.6rem] "
              type="text"
              name="newPassword"
            />
            <Field
              placeholder="تکرار رمز عبور      "
              className="border-solid border-2 ml-5 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[37rem] lg:w-[22rem] h-[3rem] mt-[1.6rem] "
              type="text"
              name="confirm"
            />

            <button
              className="w-[37rem] lg:w-[22rem] h-[3.4rem] ml-5 bg-[#158B68] rounded-xl mt-[7.2rem] text-[#ffff]"
              type="submit"
            >
              تایید
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { ForgetStepThree };
