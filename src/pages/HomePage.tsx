import GridGameCard from "@/Components/GameCard/GridGameCard";
import GenresList from "@/Components/GenresList/GenresList";
import HeadingGenres from "@/Components/GenresList/HeadingGenres";
import HeadingTitle from "@/Components/Heading/Heading";
import PlatformMenu from "@/Components/MenuList/PlatformMenu";
import SortSelector from "@/Components/MenuList/SortSelector";
import {
  Grid,
  Show,
  useBreakpointValue,
  GridItem,
  HStack,
} from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr",
      }}
      templateAreas={{
        base: `"body"`,
        md: `"side body"`,
        lg: `"side body"`,
      }}
    >
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
