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

interface Param {
  selectedPlatform: (platform: PlatformFilter) => void;
  labelId?: number;
}

export default function PlatformMenu({ selectedPlatform, labelId }: Param) {
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
                selectedPlatform(platform);
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
