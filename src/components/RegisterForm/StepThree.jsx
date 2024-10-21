import React from 'react'
import registerStepThree from "../../assets/registerStepThree.svg"
import home from "../../assets/home.svg";
import { useState } from 'react';

import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";



const StepThree = () => {
  return (
    <div className="flex  m-auto h-[32rem] w-[50rem] mt-[5rem] ">
<div className="bg-[#A4F6DE] relative left-[1px] w-[25rem] rounded-l-lg ">
  <img className="m-auto h-[31rem]" src={registerStepThree} alt="" />
</div>


<div className="w-[25rem] bg-[#eeeaea] rounded-r-lg shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] ">
  <img src={home} alt="" />
  <h2 className="text-right mr-6 text-[#22445D] mt-[0.8rem] text-[23px]">
    ثبت نام 
  </h2>
  <Formik
    // onSubmit={loginHandler}
    initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
  >
    <Form>
      <Field
        placeholder="شماره همراه    "
        className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1rem] "
        type="text"
        name="phoneOrGmail"
      />
    
  
      <Field
        placeholder="ایمیل کاربر    "
        className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1rem] "
        type="text"
        name="phoneOrGmail"
      />
    
  
      <Field
        placeholder="رمز عبور    "
        className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1rem] "
        type="text"
        name="phoneOrGmail"
      />
    
  
      <Field
        placeholder="تکرار رمز عبور    "
        className=" ml-7 border-solid border-2 border-[#158B68] text-right rounded-xl  text-[#ABA7A7] w-[22rem] h-[3rem] mt-[1rem] "
        type="text"
        name="phoneOrGmail"
      />
    <label>
      <h2 className='text-right mr-16 mb-[-1.2rem] mt-4 '> من با اتمام اظهارات موافقم </h2>
    
      <Field
      
        placeholder="   "
        className=" rounded-xl w-[1rem] h-[1rem]  mx-[22.2rem] "
        type="checkbox"
        name="phoneOrGmail"
      />
      </label>
    
  
      <button
        className=" ml-7 w-[22rem] h-[3.4rem] bg-[#158B68] rounded-xl mt-[3rem] text-[#ffff]"
        type="submit" 
      >
        ادامه
      </button>
    </Form>
  </Formik>


</div>
</div> 
  )
}

export { StepThree }
