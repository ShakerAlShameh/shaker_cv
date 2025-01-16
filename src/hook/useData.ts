import apiClient, { CanceledError } from "@/services/api-client";
import { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endPoint: string,
  configResponse?: AxiosRequestConfig,
  depends?: any[]
) => {
  const controller = new AbortController();
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      apiClient
        .get<Response<T>>(endPoint, {
          signal: controller.signal,
          ...configResponse,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      // return () => controller.abort();
    },
    depends ? [...depends] : []
  );

  return { data, error, loading };
};

export default useData;
