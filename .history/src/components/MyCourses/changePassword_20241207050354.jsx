import React from "react";
import { Field, Form, Formik } from "formik";
import changePassword from "../../assets/changePassword.svg";
import lock from "../../assets/lock.svg";
import key from "../../assets/key.svg";
import security from "./../../assets/security.svg";
// import { postChengePassword } from "../../core/api/chengePassword";
import { postApi } from "../../core/api/api";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const handlerPass = async (values) => {
    console.log(values);

    const path = `/SharePanel/ChangePassword`;
    const body = values;

    const response = await postApi({ path, body });
    console.log(response);

    toast.success("تغییر رمز با موفقیت انجام شد.");
  };

  return (
    <>
      <div className="w-[45rem] lg:w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] dark:bg-gray-800 rounded-2xl shadow-2xl">
        <div className="w-[43rem] lg:w-[66rem] h-[40.5rem] mx-auto my-[1.3rem] bg-[#FBF6F6] dark:bg-gray-700 border-[1px] rounded-lg shadow-2xl">
          <div className="text-[#22445D] dark:text-white text-[7px] text-sm bg-[#A4F6DE] dark:bg-gray-900 h-[4.5rem] rounded-lg flex justify-center py-[1.5rem]">
            <h1>تغییر رمز عبور</h1>
          </div>

          <img
            className="w-[22rem] lg:w-[28.5rem] h-[20rem] lg:h-[26.5rem] mr-[20rem] lg:mr-[36rem] my-[5rem] lg:my-[4rem] hidden lg:inline-flex"
            src={changePassword}
            alt=""
          />

          <Formik
            onSubmit={handlerPass}
            initialValues={{ oldPassword: "", newPassword: "" }}
          >
            <Form>
              <Field
                type="text      "
                name="oldPassword"
                placeholder="رمز عبور فعلی"
                className="text-[#ABA7A7] pr-12 text-sm lg:text-lg bg-[#ffff] dark:bg-gray-800 border-[2px] border-[#158B68] rounded-lg w-[24rem] lg:w-[29rem] h-[3.5rem] lg:h-[4rem] absolute top-[19.5rem] lg:top-[19rem] right-[15rem] lg:right-[30rem]"
              ></Field>

              <Field
                type="text"
                name="newPassword"
                placeholder="رمز عبور جدید"
                className="text-[#ABA7A7] pr-12 text-sm lg:text-lg bg-[#ffff] dark:bg-gray-800 border-[2px] border-[#158B68] rounded-lg w-[24rem] lg:w-[29rem] h-[3.5rem] lg:h-[4rem] absolute top-[25.5rem] lg:top-[25.5rem] right-[15rem] lg:right-[30rem]"
              ></Field>

              <img
                className="h-[1.5rem] absolute top-[20.3rem] mr-56 lg:mr-20"
                src={lock}
                alt=""
              />
              <img
                className="h-[1.5rem] absolute top-[26.3rem] mr-56 lg:mr-20"
                src={key}
                alt=""
              />
             

              <button className="text-[#ffff] dark:text-white text-sm bg-[#158B68] dark:bg-gray-900 border-[2px] border-[#158B68] rounded-lg w-[24rem] lg:w-[29rem] h-[3.5rem] lg:h-[4rem] absolute top-[20rem] lg:top-[37rem] right-[15rem] lg:right-[30rem]">
                تایید
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export { ChangePassword };
