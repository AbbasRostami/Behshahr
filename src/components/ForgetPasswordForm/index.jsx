import React, { useState } from 'react'
import forgetPassword  from './../../assets/forgetPassword.svg'
import forgetPassword2 from './../../assets/forgetPassword2.svg'
import home from './../../assets/home.svg'
import { Field, Form, Formik } from "formik";


const ForgetPasswordForm = () => {

  const forgetnHandler = async (values) => {
    console.log(values);

    const body = values;

    const response = await loginAPI(body);
    console.log(response);
  };

  const forgetnHandler2 = async (values) => {
    console.log(values);

    const body = values;

    const response = await loginAPI(body);
    console.log(response);
  };

  const [show, setShow] = useState(false)

  return (
    <>




{show ? 



<div className="flex  m-auto h-[32rem] w-[50rem] mt-[5rem] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]">
<div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg">
  <img className="m-auto h-[28rem] w-[23rem] " src={forgetPassword2} alt="" />
</div>

<div className="w-[25rem] bg-[#eeeaea] rounded-r-md">
  <img src={home} alt="" />
  <h2 className="text-right mr-6 text-[#22445D] mt-[2.5rem] text-[23px]">
    ورود به سیستم
  </h2>
  <Formik
    onSubmit={forgetnHandler2}
    initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
  >
    <Form>
      <Field
        placeholder="رمز  عبور       "
        className="border-solid border-2 ml-5 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.6rem] "
        type="text"
        name="phoneOrGmail"
      />
          <Field
        placeholder="تکرار رمز  عبور         "
        className="border-solid border-2 ml-5 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.6rem] "
        type="text"
        name="phoneOrGmail"
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

: 

<div className="flex m-auto h-[32rem] w-[50rem] mt-[5rem] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]">
      <div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-md ">
        <img className="m-auto h-[28rem] w-[23rem]" src={forgetPassword} alt="" />
      </div>
      

      <div className="w-[25rem] bg-[#eeeaea] rounded-r-md ">
        <img src={home} alt="" />
        <h2 className="text-right mr-6 text-[#22445D] mt-[2.5rem] text-[23px] ">
          ورود به سیستم
        </h2>
        <Formik
          onSubmit={forgetnHandler}
          initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
        >
          <Form>
            <Field
              placeholder="ایمیل خودرا وارد کنید     "
              className="border-solid border-2 ml-5 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1.6rem] "
              type="text"
              name="phoneOrGmail"
            />
          
       
            <button
              className="w-[22rem] h-[3.4rem] ml-5 bg-[#158B68] rounded-xl mt-[7.2rem] text-[#ffff]"
              type="submit"
              onClick={()=>setShow(!show)}
            >
              ادامه
            </button>
          </Form>
        </Formik>

        <button className="w-[22rem] h-[3.4rem] ml-5 border-solid border-[1.7px] border-[#158B68] rounded-xl mt-[0.7rem] bg-[#fff] ">
          بازگشت به صفحه اصلی
        </button>
  
      
      </div>
    </div>

}

      
    </>
  )
}

export {ForgetPasswordForm}
