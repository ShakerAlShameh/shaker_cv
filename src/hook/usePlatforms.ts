import { Platforms } from "@/entities/Platforms";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
const apiClient = new ApiClient<Platforms>("platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    staleTime: 24 * 60 * 60 * 1000,
    queryFn: apiClient.getAll,
  });

export default usePlatforms;
