import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginPick from "../../assets/loginPick.svg";
import { postApi } from "../../core/api/api";
import { AuthLayout } from "./AuthLayout";
import type { LoginResponse, LoginValues } from "./types";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (values: LoginValues) => {
    if (!values.phoneOrGmail.trim() || !values.password.trim()) {
      toast.warning("لطفاً شماره/ایمیل و رمز عبور را وارد کنید.");
      return;
    }

    try {
      setLoading(true);
      const path = "/Sign/Login";
      const response = (await postApi({ path, body: values })) as LoginResponse;

      if (response?.data?.success && response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("شما با موفقیت وارد شدید.");
        navigate("/");
      } else {
        toast.error(response?.data?.message || "ورود انجام نشد.");
      }
    } catch {
      toast.error("خطا در ارتباط با سرور.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      imageSrc={loginPick}
      title="ورود به سیستم"
      backTo={{ label: "بازگشت به صفحه اصلی", path: "/" }}
      bottomLinks={[
        { label: "فراموشی رمز عبور", path: "/forget-password" },
        { label: "ایجاد حساب کاربری", path: "/register" },
      ]}
    >
      <Formik
        initialValues={{
          phoneOrGmail: "",
          password: "",
          rememberMe: true,
        }}
        onSubmit={handleLogin}
      >
        <Form className="flex flex-1 flex-col gap-4">
          {/* شماره/ایمیل */}
          <div className="relative">
            <Field
              name="phoneOrGmail"
              type="text"
              placeholder="شماره همراه یا ایمیل"
              autoComplete="username"
              className="h-12 w-full rounded-xl border border-[#158B68] bg-white pr-11 text-right text-sm text-black outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 dark:border-green-700 dark:bg-gray-700 dark:text-white"
            />
            <FiPhone
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#158B68]"
              size={18}
            />
          </div>

          {/* رمز عبور */}
          <div className="relative">
            <Field
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="رمز عبور"
              autoComplete="current-password"
              className="h-12 w-full rounded-xl border border-[#158B68] bg-white pl-11 pr-11 text-right text-sm text-black outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 dark:border-green-700 dark:bg-gray-700 dark:text-white"
            />
            <FiLock
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#158B68]"
              size={18}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>

          {/* مرا به خاطر بسپار */}
          <label className="flex cursor-pointer items-center justify-end gap-2 text-sm text-[#22445D] dark:text-gray-300">
            <span>مرا به خاطر بسپار</span>
            <Field
              type="checkbox"
              name="rememberMe"
              className="h-4 w-4 accent-green-600"
            />
          </label>

          {/* دکمه ورود */}
          <button
            type="submit"
            disabled={loading}
            className="mt-auto h-12 w-full rounded-xl bg-[#158B68] text-sm font-medium text-white transition hover:bg-[#12785c] disabled:opacity-50"
          >
            {loading ? "در حال ورود..." : "تایید و ورود"}
          </button>
        </Form>
      </Formik>
    </AuthLayout>
  );
};

export { LoginForm };
