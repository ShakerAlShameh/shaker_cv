import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { Response } from "@/services/api-client";
import useGameQueryStore from "./useGameQueryStore";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");
const useGames = () => {
  const gameQuery = useGameQueryStore((e) => e.gameQuery);
  return useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000,
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformsId,
          ordering: gameQuery.ordering,
          search: gameQuery.searchedText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
