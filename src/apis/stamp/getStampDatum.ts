import { GetTotalStampResponseType, User } from "@/types/_common/api";
import { instance } from "../instance";
import { AxiosResponse } from "axios";

export const getUserTotalStamp = async ({ flag, name, phoneLast }: User) => {
  const params = new URLSearchParams({
    action: "stamp",
    flag: flag.toString(),
    name,
    phoneLast,
  });
  return (await instance.get("", {
    params,
  })) as AxiosResponse<GetTotalStampResponseType>;
};
