import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "../ui/color-mode";
import logo from "@/assets/react.svg";
import { useEffect } from "react";
import { Toaster, toaster } from "../ui/toaster";
import GameSearch from "../GameSearch";

export default function NavBar() {
  const { colorMode } = useColorMode();
  useEffect(() => {
    colorMode === "dark"
      ? toaster.success({
          title: "Dark Mode",
          description: "Enable",
        })
      : toaster.error({
          title: "Dark Mode",
          description: "Disable",
        });
  }, [colorMode]);

  return (
    <HStack padding="15px">
      <Image paddingRight={10} paddingLeft={5} src={logo}></Image>
      <GameSearch />
      <ColorModeButton color={"green"} />
      <Toaster />
    </HStack>
  );
}
