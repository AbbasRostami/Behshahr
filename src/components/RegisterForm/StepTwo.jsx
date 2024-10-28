import React from "react";
import registerStepTwo from "../../assets/registerStepTwo.svg";
import home from "../../assets/home2.svg";
import { Field, Formik, Form } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { verifyMessage } from "../../core/api/register";

const StepTwo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const registerHandler2 = async (values) => {
    console.log("ارسال: ", values);

    const body = { ...values, phoneNumber: location.state.phoneNumber };

    const response = await verifyMessage(body);
    console.log(response);
    if (response) {
      navigate("/register-final", { state: body });
    }
  };

  return (
    <div className="flex  m-auto h-[32rem] w-[43rem] lg:w-[50rem] mt-[5rem] ">
      <div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg hidden lg:flex">
        <img className="m-auto h-[31rem]" src={registerStepTwo} alt="" />
      </div>

      <div className=" relative w-[40rem] lg:w-[25rem] mx-auto bg-[#eeeaea] rounded-r-lg shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] ">
        <img src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[2.8rem] text-[23px]">
          ثبت نام
        </h2>
        <Formik onSubmit={registerHandler2} initialValues={{ verifyCode: "" }}>
          <Form>
            <svg
              className=" absolute top-[9rem] right-8"
              width="25"
              height="25"
              viewBox="0 0 25 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.67282 2.83676C10.8422 0.741578 14.9064 0.557041 18.2526 2.35638C21.5988 4.15572 23.6858 7.64797 23.6856 11.4473C23.6856 15.4656 22.9204 19.3036 21.5278 22.8252M4.75266 5.75555C3.63463 7.44296 3.04002 9.42307 3.04349 11.4473C3.04674 13.3918 2.49795 15.2973 1.46094 16.9422M4.19807 21.8399C6.78112 18.9955 8.20964 15.2895 8.20401 11.4473C8.20401 8.59718 10.5145 6.28674 13.3645 6.28674C16.2146 6.28674 18.525 8.59718 18.525 11.4473C18.525 12.1725 18.4961 12.8908 18.437 13.6009M13.3645 11.4473C13.3722 16.3685 11.6144 21.1292 8.41043 24.8646M17.5384 18.5399C16.7932 21.1501 15.639 23.6258 14.1187 25.8747"
                stroke="#158B68"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Field
              placeholder="کد تایید"
              className=" ml-7 pr-10 border-solid border-2 border-[#158B68] text-right rounded-xl text-black w-[37rem] lg:w-[22rem] h-[3rem] mt-[1.9rem] "
              type="text"
              name="verifyCode"
            />

            <button
              className=" ml-7 w-[37rem] lg:w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-[7rem] text-[#ffff]"
              type="submit"
            >
              ادامه
            </button>
          </Form>
        </Formik>

        <Link to="/">
          <button className="ml-7 w-[37rem] lg:w-[22rem] h-[3.4rem] border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ">
            بازگشت به صفحه قبل
          </button>
        </Link>
      </div>
    </div>
  );
};

export { StepTwo };
