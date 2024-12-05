import React from "react";
import registerStepThree from "../../assets/registerStepThree.svg";
import home from "../../assets/home.svg";
import { useState } from "react";
import { finalregister } from "../../core/api/register";

import { Field, Formik, Form } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";

const StepThree = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location?.state);

  const registerHandler3 = async (values) => {
    console.log(values);
    const body = values;

    const response3 = await finalregister(body);

    console.log(response3);
    if (response3) {
      navigate("/login");
    }
  };

  return (
    <div className="flex  m-auto h-[32rem] w-[43rem] lg:w-[50rem] mt-[5rem] ">
      <div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg hidden lg:flex">
        <img className="m-auto h-[31rem]" src={registerStepThree} alt="" />
      </div>

      <div className=" relative w-[40rem] lg:w-[25rem] mx-auto bg-[#eeeaea] rounded-r-lg shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] ">
        <img className="ml-5 mt-1" src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[0.8rem] text-[23px]">
          ثبت نام
        </h2>
        <Formik
          enableReinitialize
          onSubmit={registerHandler3}
          initialValues={{
            gmail: "",
            password: "",
            phoneNumber: location?.state?.phoneNumber,
          }}
        >
          <Form>
            <Field
              disabled
              placeholder="شماره همراه"
              className=" ml-7 pr-9 text-black border-solid border-2 border-[#158B68] text-right rounded-xl  w-[37rem] lg:w-[22rem] h-[3rem] mt-[1rem] "
              type="text"
              name="phoneNumber"
            />

            <svg
              className=" absolute top-[109px] right-8"
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
              placeholder="ایمیل کاربر"
              className=" ml-7 pr-9 border-solid border-2 border-[#158B68] text-right rounded-xl  text-black w-[37rem] lg:w-[22rem] h-[3rem] mt-[1rem] "
              type="text"
              name="gmail"
            />

            <svg className="absolute top-[173px] right-8" width="20" height="25" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.0222 13.5005C20.0222 16.9175 17.2522 19.6875 13.8352 19.6875C10.4182 19.6875 7.64821 16.9175 7.64821 13.5005C7.64821 10.0836 10.4182 7.31357 13.8352 7.31357C17.2522 7.31357 20.0222 10.0836 20.0222 13.5005ZM20.0222 13.5005C20.0222 15.7787 21.4067 17.6252 23.1157 17.6252C24.8246 17.6252 26.2091 15.7787 26.2091 13.5005C26.2091 7.59736 22.0391 2.51614 16.2492 1.36446C10.4593 0.212813 4.66216 3.31148 2.40311 8.76543C0.144055 14.2194 2.05222 20.5096 6.96066 23.7893C11.8691 27.0689 18.4107 26.4246 22.585 22.2503M20.0222 13.5005V8.34473" stroke="#12926C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


            <Field
              placeholder="رمز عبور"
              className=" ml-7 pr-9 border-solid border-2 border-[#158B68] text-right rounded-xl  text-black w-[37rem] lg:w-[22rem] h-[3rem] mt-[1rem] "
              type="text"
              name="password"
            />

            <svg className="absolute top-[238px] right-8" width="22" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0684 4.92732C21.1718 4.92732 22.877 6.63249 22.877 8.73592M26.6855 8.73592C26.6855 10.9859 25.6918 13.1199 23.9705 14.5672C22.2503 16.014 19.9776 16.6271 17.762 16.2414C17.0473 16.1182 16.2906 16.2744 15.7777 16.7873L12.4033 20.1617H9.54687V23.0181H6.69043V25.8746H1.92969V22.297C1.92969 21.5391 2.23057 20.8117 2.76631 20.2772L11.017 12.0265C11.5299 11.5136 11.686 10.757 11.5629 10.0423C11.072 7.20772 12.2199 4.33843 14.5304 2.6246C16.8409 0.910774 19.9198 0.644807 22.49 1.93702C25.0601 3.22924 26.6831 5.85919 26.6855 8.73592Z" stroke="#158B68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


            <Field
              placeholder="تکرار رمز عبور"
              className=" ml-7 pr-9 border-solid border-2 border-[#158B68] text-right rounded-xl  text-black w-[37rem] lg:w-[22rem] h-[3rem] mt-[1rem] "
              type="text"
              name="confirmPass"
            />

            <svg className="absolute top-[304px] right-8" width="20" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.60638 13.8257L11.4339 16.6532L16.1463 10.0557M12.3764 1.21387C9.53094 3.91598 5.74152 5.39802 1.8179 5.34326C1.3188 6.86379 1.06512 8.45412 1.06641 10.0545C1.06641 17.0817 5.87188 22.9855 12.3764 24.6606C18.8808 22.9868 23.6863 17.083 23.6863 10.0557C23.6863 8.40951 23.4224 6.82486 22.9348 5.342H22.7438C18.7275 5.342 15.0782 3.77368 12.3764 1.21387Z" stroke="#158B68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>



            <label>
              <h2 className="text-right mr-16 mb-[-1.2rem] mt-4 ">
                {" "}
                من با اتمام اظهارات موافقم{" "}
              </h2>

              <Field
                placeholder="   "
                className=" rounded-xl w-[1rem] h-[1rem] mx-[37rem] lg:mx-[22.2rem] "
                type="checkbox"
                name="phoneOrGmail"
              />
            </label>

        <Link to="/login"> <button
              className=" ml-7 w-[37rem] lg:w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-[3rem] text-[#ffff]"
              type="submit"
            >
              ادامه
            </button> </Link>

          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { StepThree };
