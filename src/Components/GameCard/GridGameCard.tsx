import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "@/hook/useGames";
import LoadingSkeleton from "../loading/LoadingSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

export default function GridGameCard() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        <Box padding={12}>
          <LoadingSkeleton />
        </Box>
      }
    >
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
    </InfiniteScroll>
  );
}
