import { useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";

const RegisterForm = () => {
  const [step, setstep] = useState(1);

  return (
    <>
      {step === 1 ? (
        <StepOne  />
      ) : step === 2 ? (
        <StepTwo  />
      ) : step === 3 ? (
        <StepThree />
      ) : null}
    </>
  );
};

export { RegisterForm };
