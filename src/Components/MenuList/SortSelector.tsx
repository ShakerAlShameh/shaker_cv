import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsBoxArrowDownLeft } from "react-icons/bs";

interface Param {
  selectedSort: (sort: string) => void;
  label: string | null;
}

export default function SortSelector({ selectedSort, label }: Param) {
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
                selectedSort(sort.value);
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
