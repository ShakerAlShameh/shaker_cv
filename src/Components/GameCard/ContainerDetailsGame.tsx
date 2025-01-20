import { Game } from "@/entities/Game";
import DetailsGame from "./DetailsGame";
import {
  Badge,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";

interface Param {
  game?: Game;
}

export default function ContainerDetailsGame({ game }: Param) {
  return (
    <SimpleGrid paddingY={2} columns={2} gap="40px">
      <GridItem>
        <DetailsGame titles="PlatForms">
          {game?.parent_platforms.map((e) => (
            <ol key={e.platform.id}>{e.platform.name}</ol>
          ))}
        </DetailsGame>
      </GridItem>
      <GridItem>
        <DetailsGame titles="Genres">
          {game?.genres.map((e) => (
            <ol key={e.id}>{e.name}</ol>
          ))}
        </DetailsGame>
      </GridItem>
      <GridItem>
        <DetailsGame titles="Metacritic">
          <Badge paddingX={3} colorPalette={"green"}>
            {game?.metacritic}
          </Badge>
        </DetailsGame>
      </GridItem>
      <GridItem>
        <DetailsGame titles="Publishers">
          <HStack key={game?.publishers[0]?.id}>
            <Image
              boxSize={"20px"}
              borderRadius={4}
              src={getCroppedImageUrl(game!.publishers[0].image_background)}
            ></Image>
            <Text> {game?.publishers[0]?.name}</Text>
          </HStack>
        </DetailsGame>
      </GridItem>
    </SimpleGrid>
  );
}
