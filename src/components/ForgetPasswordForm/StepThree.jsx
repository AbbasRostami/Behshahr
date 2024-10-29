import React from "react";
import { Field, Form, Formik } from "formik";
import home from "./../../assets/home.svg";
import forgetPassword2 from "./../../assets/forgetPassword2.svg";
import { postApi } from "../../core/api/api";
import { usePass } from "../../core/provider/PasswoedProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgetStepThree = ({ id }) => {
  const { passId, setPassId } = usePass();
  const navigate = useNavigate()
  



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
      toast.success("عملیات با موفقیت انجام شد.")
      navigate("/login")
    } else {
      response?.response?.data?.ErrorMessage?.map((item) => {
        toast.error(item);
      });
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

      <div className=" relative w-[40rem] lg:w-[25rem] mx-auto bg-[#eeeaea] rounded-r-md ">
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
              placeholder="رمز عبور"
              className="border-solid pr-9 border-2 ml-5 border-[#158B68] text-right rounded-xl  text-black w-[37rem] lg:w-[22rem] h-[3rem] mt-[1.6rem] "
              type="text"
              name="newPassword"
            />

            <svg
              className="absolute top-[144px] right-[37px]"
              width="22"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0684 4.92732C21.1718 4.92732 22.877 6.63249 22.877 8.73592M26.6855 8.73592C26.6855 10.9859 25.6918 13.1199 23.9705 14.5672C22.2503 16.014 19.9776 16.6271 17.762 16.2414C17.0473 16.1182 16.2906 16.2744 15.7777 16.7873L12.4033 20.1617H9.54687V23.0181H6.69043V25.8746H1.92969V22.297C1.92969 21.5391 2.23057 20.8117 2.76631 20.2772L11.017 12.0265C11.5299 11.5136 11.686 10.757 11.5629 10.0423C11.072 7.20772 12.2199 4.33843 14.5304 2.6246C16.8409 0.910774 19.9198 0.644807 22.49 1.93702C25.0601 3.22924 26.6831 5.85919 26.6855 8.73592Z"
                stroke="#158B68"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Field
              placeholder="تکرار رمز عبور"
              className="border-solid pr-9 border-2 ml-5 border-[#158B68] text-right rounded-xl  text-black w-[37rem] lg:w-[22rem] h-[3rem] mt-[1.6rem] "
              type="text"
              name="resetValue"
            />
            <svg
              className="absolute top-[219px] right-[38px]"
              width="20"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.60638 13.8257L11.4339 16.6532L16.1463 10.0557M12.3764 1.21387C9.53094 3.91598 5.74152 5.39802 1.8179 5.34326C1.3188 6.86379 1.06512 8.45412 1.06641 10.0545C1.06641 17.0817 5.87188 22.9855 12.3764 24.6606C18.8808 22.9868 23.6863 17.083 23.6863 10.0557C23.6863 8.40951 23.4224 6.82486 22.9348 5.342H22.7438C18.7275 5.342 15.0782 3.77368 12.3764 1.21387Z"
                stroke="#158B68"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
