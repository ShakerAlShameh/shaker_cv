import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "@/hook/useGames";
import LoadingSkeleton from "../loading/LoadingSkeleton";
import { GameQuery } from "@/App";
import React from "react";
interface Param {
  gameQuery: GameQuery;
}

export default function GridGameCard({ gameQuery }: Param) {
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useGames(gameQuery);
  return (
    <>
      {error && <Text> {error.message}</Text>}
      <SimpleGrid padding={3} gap={4} columns={[1, 2, 3]}>
        {isLoading && <LoadingSkeleton />}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Box paddingLeft={3} paddingBottom={5}>
        <Button
          disabled={isFetchingNextPage}
          variant="outline"
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Fetch More"}
        </Button>
      </Box>
    </>
  );
}
