// ForgetPasswordForm/StepTwo.tsx
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiShield } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import forgetPick from "../../assets/forgetPassword2.svg";
import { getApi, postApi } from "../../core/api/api";
import { usePass } from "../../core/provider/PasswoedProvider";
import { AuthInput } from "../Auth/AuthInput";
import { AuthLayout } from "../Auth/AuthLayout";
import { ResetApiResponse } from "../Auth/types";

const ForgetStepTwo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { passId, setPassId } = usePass();
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (!id) {
      navigate("/forget-password", { replace: true });
      return;
    }

    const verifyResetLink = async () => {
      try {
        const response = await getApi({ path: `/Sign/Reset/${id}` });
        if (response) {
          setPassId(response as any);
        } else {
          toast.error("لینک بازیابی نامعتبر است.");
          navigate("/forget-password", { replace: true });
        }
      } catch {
        toast.error("خطا در بررسی لینک.");
        navigate("/forget-password", { replace: true });
      } finally {
        setChecking(false);
      }
    };

    verifyResetLink();
  }, [id]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            در حال بررسی لینک بازیابی...
          </p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    if (!values.newPassword.trim()) {
      toast.warning("لطفاً رمز عبور جدید را وارد کنید.");
      return;
    }

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
    <AuthLayout imageSrc={forgetPick} title="تغییر رمز عبور">
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

export default ForgetStepTwo;
