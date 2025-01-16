import { GameQuery } from "@/App";
import useData from "./useData";

export interface Platforms {
  id: 0;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platforms?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.searchedText,
      },
    },
    [gameQuery]
  );

export default useGames;
