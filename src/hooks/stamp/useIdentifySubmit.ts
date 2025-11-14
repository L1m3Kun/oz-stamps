import { CustomErrorType } from "./../../types/_common/api";
import { getUserTotalStamp } from "@/apis/stamp/getStampDatum";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../_common/useFetch";
import { GetTotalStampResponseType, User } from "@/types/_common/api";
import { useForm } from "react-hook-form";
import { useToast } from "@/contexts/ToastContext";
import { useUser } from "@/contexts/UserContext";

export interface FormData {
  flag: string;
  name: string;
  phoneLast: string;
}

export const useIdentifySubmit = () => {
  const navigate = useNavigate();
  const toastHandler = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: { flag: "", name: "", phoneLast: "" },
  });

  const formData = watch();
  const { handleUser } = useUser();
  const { isLoading, startFetch } = useFetch<GetTotalStampResponseType, User>({
    params: { ...formData },
    defaultData: { stamps: 0 },
    apiCall: getUserTotalStamp,
  });

  const FormConfigs = [
    {
      type: "text",
      label: "flag",
      labelText: "기수",
      register: register("flag", { required: "기수를 입력해주세요." }),
      placeholder: "예: 1, 2",
      error: errors.flag?.message,
      required: true,
    },
    {
      type: "text",
      label: "name",
      labelText: "이름",
      register: register("name", { required: "이름을 입력해주세요." }),
      placeholder: "김오즈",
      error: errors.name?.message,
      required: true,
    },
    {
      type: "text",
      label: "phoneLast",
      labelText: "휴대폰 뒷 4자리",
      register: register("phoneLast", {
        required: "휴대폰 번호를 입력해주세요.",
        pattern: {
          value: /^[0-9]{4}$/,
          message: "숫자 4자리로 입력해주세요.",
        },
      }),
      placeholder: "1234",
      error: errors.phoneLast?.message,
      required: true,
    },
  ];

  const onSubmit = async () => {
    try {
      const data = await startFetch();
      handleUser({ ...formData, stamps: data.stamps });

      navigate("/result");
    } catch (e) {
      console.error("API Error:", e);
      const customError = e as CustomErrorType;
      switch (customError.status) {
        case 421:
          toastHandler.error(
            "마법사를 찾을 수 없어요. 마법사 정보를 확인해주세요.",
            {
              className: "bg-red-300 text-primary",
            }
          );
          break;
        default:
          toastHandler.warn("마법이 불안정해요. 잠시 후 다시 시도해 주세요.", {
            className: "bg-obsidian",
          });
          break;
      }
    }
  };

  return {
    FormConfigs,
    isLoading,
    handleSubmit: handleSubmit(onSubmit),
  };
};
