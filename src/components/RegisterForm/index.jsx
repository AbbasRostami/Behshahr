import React from 'react'
import { RegisterStepOne } from "./RegisterStepOne.jsx"
import { RegisterStepTwo } from './RegisterStepTwo.jsx'
import { RegisterStepTwo } from './RegisterStepThree.jsx'

const RegisterForm = () => {
  return (
    <div>
            <RegisterStepTwo />
            <RegisterStepOne />
            <RegisterStepThree />
    </div>
  )
}

export { RegisterForm }
