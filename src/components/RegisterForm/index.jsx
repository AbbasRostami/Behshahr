import React from 'react'
import { loginAPI } from "../../core/services/api/auth";
import login2Pick from "../../assets/login2Pic.svg";

import loginPick from "../../assets/loginPick.svg";

import { useState } from 'react';
import { RegisterApi } from '../../core/api/register';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';




const RegisterForm = (props) => {

        // const registerHandler = async (values) => {
        //   console.log(values);
      
        //   const body = values;
      
        //   const response = await RegisterApi(body);
        //   console.log(response);
        // };
      
        
    const [step, setstep] = useState(1)


  return (
    <>

{
  step === 1 ? <StepOne setstep={setstep} />

: step === 2 ? <StepTwo setstep={setstep} />

: step=== 3 ? <StepThree />

:null

}








       





    

    </>
  )
}

export  {RegisterForm}
