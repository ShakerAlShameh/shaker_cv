import { create } from "zustand";
export interface GameQuery {
  genreId?: number;
  platformsId?: number;
  ordering?: string;
  searchedText?: string;
}
interface GameQueryStory {
  gameQuery: GameQuery;
  setSearchText: (searchedText: string) => void;
  setPlatformId: (platformsId: number) => void;
  setGenreId: (genreId: number) => void;
  setOrder: (ordering: string) => void;
}

const useGameQueryStore = create<GameQueryStory>()((set) => ({
  gameQuery: {},
  setSearchText: (searchedText) =>
    set(() => ({ gameQuery: { searchedText: searchedText } })),
  setPlatformId: (platformsId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformsId: platformsId },
    })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setOrder: (ordering) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ordering: ordering } })),
}));

export default useGameQueryStore;
