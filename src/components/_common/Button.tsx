import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends PropsWithChildren {
  mode?: "link" | "btn";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "magic";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  to?: string;
}
const MotionLink = motion.create(Link);

export const Button = ({
  mode = "btn",
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  to = "/",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center";

  const variantClasses = {
    primary: "bg-[#984BFF] text-white hover:bg-[#8A42E6] hover:shadow-lg",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    magic:
      "bg-gradient-to-r from-[#984BFF] to-[#C478FF] text-white hover:from-[#8A42E6] hover:to-[#B366E6] shadow-lg hover:shadow-xl hover:shadow-[#984BFF]/25",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  switch (mode) {
    case "link":
      return (
        <MotionLink
          to={to}
          whileHover={{ scale: disabled ? 1 : 1.05 }}
          whileTap={{ scale: disabled ? 1 : 0.95 }}
          className={twMerge(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            className
          )}
        >
          {children}
        </MotionLink>
      );
    default:
      return (
        <motion.button
          whileHover={{ scale: disabled ? 1 : 1.05 }}
          whileTap={{ scale: disabled ? 1 : 0.95 }}
          onClick={onClick}
          disabled={disabled}
          className={twMerge(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            disabled ? "opacity-50 cursor-not-allowed" : "",
            className
          )}
        >
          {children}
        </motion.button>
      );
  }
};
