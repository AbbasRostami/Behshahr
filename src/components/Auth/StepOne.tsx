import { Form, Formik } from "formik";
import { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import registerStepOne from "../../assets/registerStepOne.svg";
import { postApi } from "../../core/api/api";
import { AuthInput } from "./AuthInput";
import { AuthLayout } from "./AuthLayout";

type StepOneValues = {
  gmail: string;
  phoneNumber: string;
};

type SendVerifyResponse = {
  status?: number;
  response?: {
    data?: {
      ErrorMessage?: string[];
    };
  };
};

const StepOne = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: StepOneValues) => {
    if (!values.gmail.trim() || !values.phoneNumber.trim()) {
      toast.warning("لطفاً ایمیل و شماره همراه را وارد کنید.");
      return;
    }

    try {
      setLoading(true);

      const response = (await postApi({
        path: "/Sign/SendVerifyMessage",
        body: { gmail: values.gmail },
      })) as SendVerifyResponse;

      if (response?.status === 200) {
        toast.success("کد تأیید با موفقیت ارسال شد.");
        navigate("/register-verify", {
          state: {
            gmail: values.gmail,
            phoneNumber: values.phoneNumber,
          },
        });
      } else {
        const errors = response?.response?.data?.ErrorMessage;
        if (errors?.length) {
          errors.forEach((msg) => toast.error(msg));
        } else {
          toast.error("خطا در ارسال کد تأیید.");
        }
      }
    } catch {
      toast.error("خطا در ارتباط با سرور.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      imageSrc={registerStepOne}
      title="ثبت‌نام"
      subtitle="ایمیل و شماره همراه خود را وارد کنید."
      backTo={{ label: "بازگشت به صفحه اصلی", path: "/" }}
      bottomLinks={[{ label: "من از قبل عضو هستم", path: "/login" }]}
    >
      <Formik<StepOneValues>
        initialValues={{ gmail: "", phoneNumber: "" }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-1 flex-col gap-4">
          <AuthInput
            name="gmail"
            type="email"
            placeholder="آدرس ایمیل"
            autoComplete="email"
            icon={<FiMail size={18} />}
          />

          <AuthInput
            name="phoneNumber"
            type="text"
            placeholder="شماره همراه"
            autoComplete="tel"
            icon={<FiPhone size={18} />}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-auto h-12 w-full rounded-xl bg-[#158B68] text-sm font-medium text-white transition hover:bg-[#12785c] disabled:opacity-50"
          >
            {loading ? "در حال ارسال..." : "ادامه"}
          </button>
        </Form>
      </Formik>
    </AuthLayout>
  );
};

export default StepOne;
