// ToastContext.tsx
import { createContext, useContext, ReactNode } from "react";
import { toast, ToastContainer, ToastOptions, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastContextType = {
  success: (message: string, options?: ToastOptions) => void;
  error: (message: string, options?: ToastOptions) => void;
  info: (message: string, options?: ToastOptions) => void;
  warn: (message: string, options?: ToastOptions) => void;
  dismiss: (toastId?: string | number) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const value: ToastContextType = {
    success: (message, options) => toast.success(message, options),
    error: (message, options) => toast.error(message, options),
    info: (message, options) => toast.info(message, options),
    warn: (message, options) => toast.warn(message, options),
    dismiss: (toastId) => toast.dismiss(toastId),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        theme="dark"
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx)
    throw new Error(
      "Context Error: useToast must be used within a ToastProvider"
    );
  return ctx;
};
