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
    <div className="flex  m-auto h-[32rem] w-[50rem] mt-[5rem] ">
      <div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg ">
        <img className="m-auto h-[31rem]" src={registerStepTwo} alt="" />
      </div>

      <div className="w-[25rem] bg-[#eeeaea] rounded-r-lg shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] ">
        <img src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[2.8rem] text-[23px]">
          ثبت نام
        </h2>
        <Formik onSubmit={registerHandler2} initialValues={{ verifyCode: "" }}>
          <Form>
            <Field
              placeholder="کد تایید    "
              className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.9rem] "
              type="text"
              name="verifyCode"
            />

            <button
              className=" ml-7 w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-[7rem] text-[#ffff]"
              type="submit"
            >
              ادامه
            </button>
          </Form>
        </Formik>

        <Link to="/">
          <button className="ml-7 w-[22rem] h-[3.4rem] border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ">
            بازگشت به صفحه قبل
          </button>
        </Link>
      </div>
    </div>
  );
};

export { StepTwo };
