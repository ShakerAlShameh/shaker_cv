import ContainerDetailsGame from "@/Components/GameCard/ContainerDetailsGame";
import HeadingGame from "@/Components/Heading/HeadingGame";
import ScreenShorts from "@/Components/ScreenShorts";
import useGame from "@/hook/useGame";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router";

export default function GamePage() {
  const { slug } = useParams();
  if (!slug) throw Error;
  const { data: game, isLoading } = useGame(slug!);
  if (isLoading) return <>Loading...</>;

  return (
    <SimpleGrid
      padding={2}
      templateColumns={{
        base: "1fr",
        md: "1fr 1fr",
      }}
      templateAreas={{ base: `"c1" "c2"`, md: `"c1 c2"` }}
    >
      <GridItem area={"c1"}>
        <HeadingGame title={game?.name} description={game?.description} />
        <ContainerDetailsGame game={game} />
      </GridItem>
      <GridItem area={"c2"}>
        <ScreenShorts gameId={game!.id} />
      </GridItem>
    </SimpleGrid>
  );
}
