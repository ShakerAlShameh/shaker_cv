import { Game } from "@/hook/useGames";
// import { FaAndroid, FaLinux, FaXbox, FaWindows } from "react-icons/fa";
import { Card, Image, Heading } from "@chakra-ui/react";
import IconList from "./IconList";
import getCroppedImageUrl from "@/services/image-url";

interface Param {
  game: Game;
}
export default function CardGames({ game }: Param) {
  return (
    <Card.Root key={game.id} maxW="xl" overflow="hidden" borderRadius={12}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body gap="2">
        <Heading>{game.name}</Heading>
        <IconList
          metacritic={game.metacritic}
          platform={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
}
