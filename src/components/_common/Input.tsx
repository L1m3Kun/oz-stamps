import { FieldValues, UseFormRegister } from "react-hook-form";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { memo } from "react";

interface InputProps<T extends FieldValues> {
  labelText: string;
  placeholder?: string;
  register: ReturnType<UseFormRegister<T>>;
  type?: string;
  error?: string;
  required?: boolean;
}

export const Input = memo(
  <T extends FieldValues>({
    labelText,
    placeholder,
    type = "text",
    error,
    register,
    required,
  }: InputProps<T>) => {
    return (
      <div className="w-full">
        <label
          htmlFor={labelText}
          className="block text-sm font-medium text-gray-700"
        >
          {labelText} {required && <span className="text-red-500">*</span>}
        </label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type={type}
          placeholder={placeholder}
          id={labelText}
          className={twMerge(
            "w-full px-4 py-3 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent ",
            error
              ? "border-red-500 bg-red-50"
              : "border-gray-300 hover:border-gray-400"
          )}
          {...register}
        />
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${
            error ? "visible" : "invisible"
          } mt-2 text-sm text-red-600 h-3`}
        >
          {error && error}
        </motion.p>
      </div>
    );
  }
);
