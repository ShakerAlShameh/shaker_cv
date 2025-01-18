import useGameQueryStore from "@/hook/useGameQueryStore";
import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsBoxArrowDownLeft } from "react-icons/bs";

export default function SortSelector() {
  const setOrder = useGameQueryStore((e) => e.setOrder);
  const label = useGameQueryStore((e) => e.gameQuery.ordering);
  const sortItem = [
    { value: "-updated", name: "Relevance" },
    { value: "-added", name: "Date added" },
    { value: "name", name: "Name" },
    { value: "-released", name: "Release date" },
    { value: "-metacritic", name: "Popularity" },
    { value: "-rating", name: "Average rating" },
  ];
  const title = sortItem.find((e) => e.value === label);

  return (
    <Box>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant={"outline"} size="sm">
            Order By : {title?.name || "Relevance"} <BsBoxArrowDownLeft />
          </Button>
        </MenuTrigger>
        <MenuContent position={"absolute"}>
          {sortItem.map((sort) => (
            <MenuItem
              key={sort.name}
              onClick={() => {
                setOrder(sort.value);
              }}
              value={sort.name}
            >
              {sort.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
}
