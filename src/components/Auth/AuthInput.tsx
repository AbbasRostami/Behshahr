// AuthInput.tsx
import { Field } from "formik";
import React from "react";

interface AuthInputProps {
  name: string;
  type?: string;
  placeholder: string;
  icon: React.ReactNode;
  disabled?: boolean;
  autoComplete?: string;
  rightElement?: React.ReactNode;
}

const inputClass =
  "h-12 w-full rounded-xl border-2 border-[#158B68] bg-white pr-11 text-right text-sm text-black outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 dark:border-green-700 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400";

const AuthInput: React.FC<AuthInputProps> = ({
  name,
  type = "text",
  placeholder,
  icon,
  disabled,
  autoComplete,
  rightElement,
}) => {
  return (
    <div className="relative">
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        className={`${inputClass} ${rightElement ? "pl-11" : ""} ${
          disabled ? "cursor-not-allowed opacity-60" : ""
        }`}
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#158B68]">
        {icon}
      </span>
      {rightElement && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2">
          {rightElement}
        </span>
      )}
    </div>
  );
};

export { AuthInput };
export default AuthInput;
