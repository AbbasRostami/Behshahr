import { Form, Formik } from "formik";
import { useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiShield } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postApi } from "../../core/api/api";
import { usePass } from "../../core/provider/PasswoedProvider";
import { AuthInput } from "../Auth/AuthInput";
import { AuthLayout } from "../Auth/AuthLayout";
import type { ResetApiResponse } from "../Auth/types";
import forgetPassword2 from "./../../assets/forgetPassword2.svg";

const ForgetStepThree = ({ id }: { id: string }) => {
  const { passId } = usePass();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    if (values.newPassword !== values.confirmPassword) {
      toast.error("رمز عبور و تکرار آن یکسان نیستند.");
      return;
    }

    if (values.newPassword.length < 8) {
      toast.warning("رمز عبور باید حداقل ۸ کاراکتر باشد.");
      return;
    }

    try {
      setLoading(true);

      const body = {
        userId: passId?.id,
        newPassword: values.newPassword,
        resetValue: passId?.message,
      };

      // ← اینجا cast می‌کنیم که TypeScript بدونه چه شکلیه
      const response = (await postApi({
        path: "/Sign/Reset",
        body,
      })) as ResetApiResponse;

      if (response?.success) {
        toast.success("رمز عبور با موفقیت تغییر کرد.");
        navigate("/login");
      } else {
        const errors = response?.response?.data?.ErrorMessage;
        if (errors?.length) {
          errors.forEach((msg) => toast.error(msg));
        } else {
          toast.error("خطا در تغییر رمز عبور.");
        }
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
    <AuthLayout imageSrc={forgetPassword2} title="تغییر رمز عبور">
      <Formik
        initialValues={{ newPassword: "", confirmPassword: "" }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-1 flex-col gap-4">
          <AuthInput
            name="newPassword"
            type={showPass ? "text" : "password"}
            placeholder="رمز عبور جدید"
            autoComplete="new-password"
            icon={<FiLock size={18} />}
            rightElement={toggleIcon}
          />

          <AuthInput
            name="confirmPassword"
            type={showPass ? "text" : "password"}
            placeholder="تکرار رمز عبور جدید"
            autoComplete="new-password"
            icon={<FiShield size={18} />}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-auto h-12 w-full rounded-xl bg-[#158B68] text-sm font-medium text-white transition hover:bg-[#12785c] disabled:opacity-50"
          >
            {loading ? "در حال تغییر..." : "تأیید و تغییر رمز"}
          </button>
        </Form>
      </Formik>
    </AuthLayout>
  );
};

export { ForgetStepThree };
