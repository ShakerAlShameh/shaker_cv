import { GameQuery } from "@/App";
import { useGenre } from "@/hook/useGenre";
import { usePlatform } from "@/hook/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

export default function HeadingTitle({ gameQuery }: Props) {
  const genreLabel = useGenre(gameQuery.genreId);
  const platformLabel = usePlatform(gameQuery.platformsId);

  return (
    <Heading
      paddingBottom={5}
      paddingLeft={3}
      as="h1"
      fontSize={"4xl"}
      color={"gray.500"}
    >
      Game : {platformLabel?.name} {genreLabel?.name}
    </Heading>
  );
}
