import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface InputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  required?: boolean;
}

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  required = false,
}: InputProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={twMerge(
          "w-full px-4 py-3 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#984BFF] focus:border-transparent ",
          error
            ? "border-red-500 bg-red-50"
            : "border-gray-300 hover:border-gray-400"
        )}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
