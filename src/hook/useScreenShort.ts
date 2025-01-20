import { ScreenShort } from "@/entities/ScreenShort";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenShort = (id: string | number) => {
  const apiClient = new APIClient<ScreenShort>("/games/" + id + "/screenshots");
  return useQuery({
    queryKey: ["screenShort", id],
    staleTime: 24 * 60 * 60 * 1000,

    queryFn: apiClient.getAll,
  });
};

export default useScreenShort;
