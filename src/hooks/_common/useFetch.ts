import { CustomErrorType } from "@/types/_common/api";
import { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";

type ErrorType = {
  message?: string;
  details?: string;
  status?: number;
};

interface FetchParams<T, P> {
  params: P;
  apiCall: (params: P) => Promise<AxiosResponse<unknown>>;
  defaultData: T;
}

export const useFetch = <T, P>({
  params,
  apiCall,
  defaultData,
}: FetchParams<T, P>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>(defaultData);
  const [error, setError] = useState<ErrorType | null>(null);

  const startFetch = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await apiCall(params);
      const payload = response.data as CustomErrorType;

      if ("status" in payload && "details" in payload) {
        throw payload;
      }
      setData(payload as T);
      return payload as T;
    } catch (error) {
      if (error instanceof AxiosError) {
        setError({ message: error.message, status: error.status });
      }

      setError(error as CustomErrorType);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [params, apiCall]);

  return { isLoading, data, error, isError: !!error, startFetch };
};
