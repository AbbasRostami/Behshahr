import React, { useState } from 'react'
import { Field, Form, Formik } from "formik";
import { useEffect  } from 'react';
import { postApi } from '../../core/api/api';
import { StepOne } from './stepOne';
import { Steptwo } from './StepTwo';


const ForgetPasswordForm = () => {

 
  return (
    <>
    <Steptwo />
    
      
    </>
  )
}

export {ForgetPasswordForm}
