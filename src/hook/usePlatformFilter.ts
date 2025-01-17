import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
const apiClient = new ApiClient<PlatformFilter>("platforms/lists/parents");

export interface PlatformFilter {
  id: number;
  name: string;
  slug: string;
}

const usePlatformFilter = () =>
  useQuery({
    queryKey: ["platforms"],
    staleTime: 24 * 60 * 60 * 1000,
    queryFn: apiClient.getAll,
  });

export default usePlatformFilter;
