import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import registerStepThree from "../../assets/registerStepThree.svg";
import { finalregister } from "../../core/api/register";
import { AuthInput } from "./AuthInput";
import { AuthLayout } from "./AuthLayout";

type RegisterStepState = {
  gmail: string;
  phoneNumber: string;
};

const StepThree = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const state = location.state as RegisterStepState | null;

  useEffect(() => {
    if (!state?.gmail || !state?.phoneNumber) {
      navigate("/register", { replace: true });
    }
  }, [state, navigate]);

  if (!state?.gmail || !state?.phoneNumber) {
    return null;
  }

  const handleSubmit = async (values: {
    password: string;
    confirmPassword: string;
  }) => {
    if (!values.password.trim()) {
      toast.warning("لطفاً رمز عبور را وارد کنید.");
      return;
    }

    if (values.password !== values.confirmPassword) {
      toast.error("رمز عبور و تکرار آن یکسان نیستند.");
      return;
    }

    if (values.password.length < 8) {
      toast.warning("رمز عبور باید حداقل ۸ کاراکتر باشد.");
      return;
    }

    try {
      setLoading(true);

      const body = {
        password: values.password,
        gmail: state.gmail,
        phoneNumber: state.phoneNumber,
      };

      const response = await finalregister(body);

      if (response) {
        toast.success("ثبت‌نام با موفقیت انجام شد.");
        navigate("/login");
      } else {
        toast.error("خطا در ثبت‌نام.");
      }
    } catch {
      toast.error("خطا در ارتباط با سرور.");
    } finally {
      setLoading(false);
    }
  };

  const toggleIcon = (
    <button
      type="button"
      onClick={() => setShowPass(!showPass)}
      className="text-gray-400 transition hover:text-gray-600"
    >
      {showPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
    </button>
  );

  return (
    <AuthLayout imageSrc={registerStepThree} title="تکمیل ثبت‌نام">
      <div className="mb-4 rounded-xl bg-green-50 p-3 text-sm text-[#22445D] dark:bg-gray-700 dark:text-white">
        <p>ایمیل: {state.gmail}</p>
        <p className="mt-1">شماره همراه: {state.phoneNumber}</p>
      </div>

      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-1 flex-col gap-4">
          <AuthInput
            name="password"
            type={showPass ? "text" : "password"}
            placeholder="رمز عبور"
            autoComplete="new-password"
            icon={<FiLock size={18} />}
            rightElement={toggleIcon}
          />

          <AuthInput
            name="confirmPassword"
            type={showPass ? "text" : "password"}
            placeholder="تکرار رمز عبور"
            autoComplete="new-password"
            icon={<FiLock size={18} />}
          />

          <label className="flex cursor-pointer items-center justify-end gap-2 text-sm text-[#22445D] dark:text-gray-300">
            <span>من با قوانین و مقررات موافقم</span>
            <input
              type="checkbox"
              className="h-4 w-4 accent-green-600"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-auto h-12 w-full rounded-xl bg-[#158B68] text-sm font-medium text-white transition hover:bg-[#12785c] disabled:opacity-50"
          >
            {loading ? "در حال ثبت‌نام..." : "تکمیل ثبت‌نام"}
          </button>
        </Form>
      </Formik>
    </AuthLayout>
  );
};

export default StepThree;
