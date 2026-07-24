import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { FiShield } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import registerStepTwo from "../../assets/registerStepTwo.svg";
import { verifyMessage } from "../../core/api/register";
import { AuthInput } from "./AuthInput";
import { AuthLayout } from "./AuthLayout";

type RegisterStepState = {
  gmail: string;
  phoneNumber: string;
};

const StepTwo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const state = location.state as RegisterStepState | null;

  useEffect(() => {
    if (!state?.gmail || !state?.phoneNumber) {
      navigate("/register", { replace: true });
    }
  }, [state, navigate]);

  if (!state?.gmail || !state?.phoneNumber) {
    return null;
  }

  const handleSubmit = async (values: { verifyCode: string }) => {
    if (!values.verifyCode.trim()) {
      toast.warning("لطفاً کد تأیید را وارد کنید.");
      return;
    }

    try {
      setLoading(true);

      const body = {
        gmail: state.gmail,
        phoneNumber: state.phoneNumber,
        verifyCode: values.verifyCode,
      };

      const response = await verifyMessage(body);

      if (response) {
        toast.success("کد تأیید با موفقیت تأیید شد.");
        navigate("/register-final", {
          state: {
            gmail: state.gmail,
            phoneNumber: state.phoneNumber,
          },
        });
      } else {
        toast.error("کد تأیید اشتباه است.");
      }
    } catch {
      toast.error("خطا در تأیید کد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      imageSrc={registerStepTwo}
      title="تأیید کد"
      subtitle={`کد تأیید برای ${state.gmail} ارسال شد.`}
      backTo={{ label: "بازگشت به مرحله قبل", path: "/register" }}
    >
      <Formik initialValues={{ verifyCode: "" }} onSubmit={handleSubmit}>
        <Form className="flex flex-1 flex-col gap-4">
          <AuthInput
            name="verifyCode"
            placeholder="کد تأیید"
            autoComplete="one-time-code"
            icon={<FiShield size={18} />}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-auto h-12 w-full rounded-xl bg-[#158B68] text-sm font-medium text-white transition hover:bg-[#12785c] disabled:opacity-50"
          >
            {loading ? "در حال تأیید..." : "ادامه"}
          </button>
        </Form>
      </Formik>
    </AuthLayout>
  );
};

export default StepTwo;
