import { Game } from "@/entities/Game";
import { Card, Image, Heading } from "@chakra-ui/react";
import IconList from "./IconList";
import getCroppedImageUrl from "@/services/image-url";
import { Link } from "react-router";

interface Param {
  game: Game;
}
export default function CardGames({ game }: Param) {
  return (
    <Link to={"game/" + `${game.slug}`}>
      <Card.Root
        _hover={{ transform: "scale(1.03)", transition: ".13s ease-in" }}
        key={game.id}
        maxW="xl"
        overflow="hidden"
        borderRadius={12}
      >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <Card.Body gap="2">
          <Heading>{game.name}</Heading>
          <IconList
            metacritic={game.metacritic}
            platform={game.parent_platforms.map((p) => p.platform)}
          />
        </Card.Body>
      </Card.Root>
    </Link>
  );
}
