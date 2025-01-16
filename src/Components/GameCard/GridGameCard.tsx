import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "@/hook/useGames";
import LoadingSkeleton from "../loading/LoadingSkeleton";
import { GameQuery } from "@/App";
interface Param {
  gameQuery: GameQuery;
}

export default function GridGameCard({ gameQuery }: Param) {
  const { data, error, loading } = useGames(gameQuery);
  return (
    <>
      {error && <Text> {error}</Text>}
      <SimpleGrid columns={[1, 2, 3]} gap={4} padding={3}>
        {loading && <LoadingSkeleton />}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
