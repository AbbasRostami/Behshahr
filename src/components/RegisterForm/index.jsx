import React from 'react'
import { RegisterStepOne } from "./RegisterStepOne.jsx"
import { RegisterStepTwo } from './RegisterStepTwo.jsx'
import { RegisterStepThree } from './RegisterStepThree.jsx'
import { Header } from "./../common/Header"
import { Footer } from "./../common/Footer"

const RegisterForm = () => {
  return (
    <div>
                <RegisterStepTwo />
                <RegisterStepOne />
                <RegisterStepThree />
            <Footer />
    </div>
  )
}

export { RegisterForm }
