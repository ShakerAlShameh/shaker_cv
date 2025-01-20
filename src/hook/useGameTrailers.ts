import { gameTrailers } from "@/entities/GameTrailers";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGameTrailers = (id: string | number) => {
  const apiClient = new APIClient<gameTrailers>("/games/" + id + "/movies");
  return useQuery({
    queryKey: ["gameTrailers", id],
    queryFn: apiClient.getAll,
  });
};
export default useGameTrailers;
