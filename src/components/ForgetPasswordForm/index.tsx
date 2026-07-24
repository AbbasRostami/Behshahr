import { Form, Formik } from "formik";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import forgetPick from "../../assets/forgetPassword2.svg";
import { postApi } from "../../core/api/api";
import { AuthInput } from "../Auth/AuthInput";
import { AuthLayout } from "../Auth/AuthLayout";

const ForgetPasswordForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { email: string }) => {
    if (!values.email.trim()) {
      toast.warning("لطفاً ایمیل خود را وارد کنید.");
      return;
    }

    try {
      setLoading(true);
      const response = await postApi({
        path: "/Sign/ForgetPassword",
        body: {
          email: values.email,
          baseUrl: window.location.origin + "/reset-password",
        },
      });

      toast.success("لینک بازیابی به ایمیل شما ارسال شد.");
    } catch {
      toast.error("خطا در ارسال لینک بازیابی.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      imageSrc={forgetPick}
      title="فراموشی رمز عبور"
      subtitle="ایمیل خود را وارد کنید تا لینک بازیابی دریافت کنید."
      backTo={{ label: "بازگشت به ورود", path: "/login" }}
    >
      <Formik initialValues={{ email: "" }} onSubmit={handleSubmit}>
        <Form className="flex flex-1 flex-col gap-4">
          <AuthInput
            name="email"
            type="email"
            placeholder="آدرس ایمیل"
            autoComplete="email"
            icon={<FiMail size={18} />}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-auto h-12 w-full rounded-xl bg-[#158B68] text-sm font-medium text-white transition hover:bg-[#12785c] disabled:opacity-50"
          >
            {loading ? "در حال ارسال..." : "ارسال لینک بازیابی"}
          </button>
        </Form>
      </Formik>
    </AuthLayout>
  );
};

export default ForgetPasswordForm;
