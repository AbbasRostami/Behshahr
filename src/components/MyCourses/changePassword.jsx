import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { HeaderDashbord } from "../common/HeaderDashbord/HeaderDashbord";
import { MainDashbord } from "../common/MainDashbord/mainDashbord";

import changePassword from "../../assets/changePassword.svg";
import lock from "../../assets/lock.svg";
import key from "../../assets/key.svg";
import security from "../../assets/security.svg";
import { postChengePassword } from "../../core/api/chengePassword";

const ChangePassword = () => {


  const handlerPass = async (values)=>{
    console.log(values);
    
    const body = values

    const response =await postChengePassword(body);
    console.log(response);
    
    
  }
  return (
    <>
      <HeaderDashbord />

      <div className="flex mx-[1rem] rtl gap-11">

        <MainDashbord />

        <div className="w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] rounded-2xl shadow-2xl">
          <div className="w-[66rem] h-[40.5rem] mx-[2rem] my-[1.3rem] bg-[#FBF6F6] border-[1px] rounded-lg shadow-2xl">

            <div className="text-[#22445D] text-[7px] text-sm bg-[#A4F6DE] h-[4.5rem] rounded-lg flex justify-center py-[1.5rem]">
              <h1>تغییر رمز عبور</h1>
            </div>

            <img
              className="w-[28.5rem] h-[26.5rem] mx-[35rem] my-[4rem]"
              src={changePassword}
              alt=""
            />

            <Formik
             onSubmit={handlerPass}
            initialValues={{password:"" , newPass:"" ,repetPass:""}}
            >
              <Form>
                <Field
                  type="text      "
                  name="password"
                  placeholder="              رمز عبور فعلی"
                  className="text-[#ABA7A7]  text-lg bg-[#ffff] border-[2px] border-[#158B68] rounded-lg w-[29rem] h-[4rem] absolute top-[19rem] right-[30rem]">
                  

                </Field>

                <Field
                  type="text"
                  name="newPass"
                  placeholder="              رمز عبور جدید"
                  className="text-[#ABA7A7] text-lg bg-[#ffff] border-[2px] border-[#158B68] rounded-lg w-[29rem] h-[4rem] absolute top-[25rem] right-[30rem]"
                ></Field>

                <Field
                  type="text"
                  name="repetPass"
                  placeholder="              تکرار رمز عبور جدید"
                  className="text-[#ABA7A7] text-lg bg-[#ffff] border-[2px] border-[#158B68] rounded-lg w-[29rem] h-[4rem] absolute top-[30rem] right-[30rem]"
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

                <button className="text-[#ffff] text-sm bg-[#158B68] border-[2px] border-[#158B68] rounded-lg w-[29rem] h-[4rem] absolute top-[37rem] right-[30rem]">
                  تایید
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export { ChangePassword };
