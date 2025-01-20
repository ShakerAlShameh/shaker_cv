import { Platforms } from "@/entities/Platforms";
import { publishers } from "./publishers";
import { Genres } from "./Genres";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genres[];
  publishers: publishers[];
  description: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}
