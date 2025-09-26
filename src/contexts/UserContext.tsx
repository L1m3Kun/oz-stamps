import { User } from "@/types/_common/api";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface UserContextType extends User {
  stamps: number;
  handleUser: (
    newUser: Partial<Omit<UserContextType, "handleUser" | "handleStamps">>
  ) => void;
}

const USER_CONTEXT = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<
    Omit<UserContextType, "handleUser" | "handleStamps">
  >({
    name: "",
    flag: "",
    phoneLast: "",
    stamps: 0,
  });
  const handleUser = useCallback((newUser: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...newUser }));
  }, []);

  return (
    <USER_CONTEXT.Provider value={{ ...user, handleUser }}>
      {children}
    </USER_CONTEXT.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(USER_CONTEXT);
  if (!ctx) {
    throw new Error("Context Error: User Context is not found.");
  }

  return ctx;
};
