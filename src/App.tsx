import {
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./Components/NavBar/NavBar";
import GridGameCard from "./Components/GameCard/GridGameCard";
import GenresList from "./Components/GenresList/GenresList";
import PlatformMenu from "./Components/MenuList/PlatformMenu";
import SortSelector from "./Components/MenuList/SortSelector";
import HeadingTitle from "./Components/Heading";
import HeadingGenres from "./Components/GenresList/HeadingGenres";

export default function App() {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr",
      }}
      templateAreas={{
        base: `"nav" "body"`,
        md: `"nav nav" "side body"`,
        lg: `"nav nav" "side body"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show when={useBreakpointValue({ base: false, md: true, lg: true })}>
        <GridItem paddingLeft={1} paddingTop={2} area={"side"}>
          <HeadingGenres />
          <GenresList />
        </GridItem>
      </Show>
      <GridItem paddingTop={3} area={"body"}>
        <HeadingTitle />
        <HStack paddingX={3}>
          <PlatformMenu />
          <SortSelector></SortSelector>
        </HStack>
        <GridGameCard />
      </GridItem>
    </Grid>
  );
}
