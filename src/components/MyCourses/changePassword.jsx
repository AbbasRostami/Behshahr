import React from "react";
import { Field, Form, Formik } from "formik";
import changePassword from "../../assets/changePassword.svg";
import lock from "../../assets/lock.svg";
import key from "../../assets/key.svg";
import security from "./../../assets/security.svg";
// import { postChengePassword } from "../../core/api/chengePassword";
import { postApi } from "../../core/api/api";

const ChangePassword = () => {
  const handlerPass = async (values) => {
    console.log(values);

    const path = `/SharePanel/ChangePassword`;
    const body = values;

    const response = await postApi({ path, body });
    console.log(response);
  };

  return (
    <>
      <div className="w-[48rem] xl:w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] rounded-2xl shadow-2xl">
        <div className="w-[45rem] xl:w-[66rem] h-[40.5rem] mx-[2rem] my-[1.3rem] bg-[#FBF6F6] border-[1px] rounded-lg shadow-2xl">
          <div className="text-[#22445D] text-[7px] text-sm bg-[#A4F6DE] h-[4.5rem] rounded-lg flex justify-center py-[1.5rem]">
            <h1>تغییر رمز عبور</h1>
          </div>

          <img
            className="w-[23rem] xl:w-[28.5rem] h-[21rem] xl:h-[26.5rem] mx-[21.5rem] xl:mx-[35rem] my-[5rem] xl:my-[4rem]"
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
                className="text-[#ABA7A7] pr-12 text-sm xl:text-lg bg-[#ffff] border-[2px] border-[#158B68] rounded-lg w-[18rem] xl:w-[29rem] h-[3.5rem] xl:h-[4rem] absolute top-[19.5rem] xl:top-[19rem] right-[20rem] xl:right-[30rem]"
              ></Field>

              <Field
                type="text"
                name="newPassword"
                placeholder="رمز عبور جدید"
                className="text-[#ABA7A7] pr-12 text-sm xl:text-lg bg-[#ffff] border-[2px] border-[#158B68] rounded-lg w-[18rem] xl:w-[29rem] h-[3.5rem] xl:h-[4rem] absolute top-[25.5rem] xl:top-[25.5rem] right-[20rem] xl:right-[30rem]"
              ></Field>

              <Field
                type="text"
                name="repetPass"
                placeholder="تکرار رمز عبور جدید"
                className="text-[#ABA7A7] pr-12 text-sm xl:text-lg bg-[#ffff] border-[2px] border-[#158B68] rounded-lg w-[18rem] xl:w-[29rem] h-[3.5rem] xl:h-[4rem] absolute top-[30.5rem] xl:top-[30.5rem] right-[20rem] xl:right-[30rem]"
              ></Field>

              <img
                className="h-[1.5rem] absolute top-[20.3rem] mx-20"
                src={lock}
                alt=""
              />
              <img
                className="h-[1.5rem] absolute top-[26.3rem] mx-20"
                src={key}
                alt=""
              />
              <img
                className="h-[1.5rem] absolute top-[31.3rem] mx-20"
                src={security}
                alt=""
              />

              <button className="text-[#ffff] text-sm bg-[#158B68] border-[2px] border-[#158B68] rounded-lg w-[18rem] xl:w-[29rem] h-[3.5rem] xl:h-[4rem] absolute top-[35rem] xl:top-[37rem] right-[20rem] xl:right-[30rem]">
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
