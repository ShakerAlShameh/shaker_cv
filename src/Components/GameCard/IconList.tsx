import { Platforms } from "@/hook/useGames";
import {
  FaWindows,
  FaAndroid,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { SiNintendo3Ds } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Badge, Box, HStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface Param {
  platform: Platforms[];

  metacritic: number;
}

export default function IconList({ metacritic, platform }: Param) {
  const colorMetacritic = metacritic >= 90 ? "green" : "yellow";
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo3Ds,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack justifyContent={"space-between"}>
      <HStack marginY={"5px"}>
        {platform.map((e) => (
          <Box key={e.id} as={IconMap[e.slug]} color={"gray.600"} boxSize={5} />
        ))}
      </HStack>
      {metacritic && (
        <Badge paddingX={3} colorPalette={colorMetacritic}>
          <Text> {metacritic}</Text>
        </Badge>
      )}
    </HStack>
  );
}
