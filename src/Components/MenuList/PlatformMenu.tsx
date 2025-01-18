import useGameQueryStore from "@/hook/useGameQueryStore";
import { usePlatform } from "@/hook/usePlatform";
import usePlatformFilter, { PlatformFilter } from "@/hook/usePlatformFilter";
import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsBoxArrowDownLeft } from "react-icons/bs";

export default function PlatformMenu() {
  const labelId = useGameQueryStore((e) => e.gameQuery.platformsId);
  const setPlatformId = useGameQueryStore((e) => e.setPlatformId);
  const { data } = usePlatformFilter();
  const labelFind = usePlatform(labelId);
  return (
    <Box>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant={"outline"} size="sm">
            {labelFind?.name || "Platform"} <BsBoxArrowDownLeft />
          </Button>
        </MenuTrigger>
        <MenuContent position={"absolute"}>
          {data?.results.map((platform: PlatformFilter) => (
            <MenuItem
              key={platform.id}
              onClick={() => {
                setPlatformId(platform.id);
              }}
              value={platform.slug}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
}
