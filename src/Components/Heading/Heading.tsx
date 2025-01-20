import useGameQueryStore from "@/hook/useGameQueryStore";
import { useGenre } from "@/hook/useGenre";
import { usePlatform } from "@/hook/usePlatform";
import { Heading } from "@chakra-ui/react";

export default function HeadingTitle() {
  const genreId = useGameQueryStore((e) => e.gameQuery.genreId);
  const platformsId = useGameQueryStore((e) => e.gameQuery.platformsId);
  const genreLabel = useGenre(genreId);
  const platformLabel = usePlatform(platformsId);

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
