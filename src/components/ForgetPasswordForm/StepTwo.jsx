import forgetPassword2 from "./../../assets/forgetPassword2.svg";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import home from "./../../assets/home.svg";
import { getApi } from "../../core/api/api";
import { useParams } from "react-router-dom";

const Steptwo = () => {

  const [pass, setPass] = useState([]);

  const getPassword = async () => {
    const path = `/Sign/Reset/:ConfigValue` ;
    const response = await getApi({ path });
    console.log(response);
    if (response) {
      setPass(response);
    }
  };
  

  useEffect(() => {
    getPassword();
  }, []);


  return (
    <div className="flex  m-auto h-[32rem] w-[50rem] mt-[5rem] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]">
      <div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg">
        <img
          className="m-auto h-[28rem] w-[23rem] "
          src={forgetPassword2}
          alt=""
        />
      </div>

      <div className="w-[25rem] bg-[#eeeaea] rounded-r-md">
        <img src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[2.5rem] text-[23px]">
          ورود به سیستم
        </h2>
        <Formik
          onSubmit
          initialValues={{
            phoneOrPass: "",
            phoneOrPassword: "",
            rememberMe: true,
          }}
        >
          <Form>
            <Field
              placeholder="رمز  عبور       "
              className="border-solid border-2 ml-5 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.6rem] "
              type="text"
              name="phoneOrPass"
            />
            <Field
              placeholder="تکرار رمز  عبور         "
              className="border-solid border-2 ml-5 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.6rem] "
              type="text"
              name="phoneOrPassword"
            />

            <button
              className="w-[22rem] h-[3.4rem] ml-5 bg-[#158B68] rounded-xl mt-10 text-[#ffff]"
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

export { Steptwo };
