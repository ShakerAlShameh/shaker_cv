import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

export default function HeadingTitle({ gameQuery }: Props) {
  return (
    <Heading
      paddingBottom={5}
      paddingLeft={3}
      as="h1"
      fontSize={"4xl"}
      color={"gray.500"}
    >
      Game : {gameQuery.platforms?.name} {gameQuery.genre?.name}
    </Heading>
  );
}
