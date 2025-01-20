import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
import { Genres } from "../entities/Genres";

const apiClient = new ApiClient<Genres>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    staleTime: 24 * 60 * 60 * 1000,
    queryFn: apiClient.getAll,
  });

export default useGenres;
