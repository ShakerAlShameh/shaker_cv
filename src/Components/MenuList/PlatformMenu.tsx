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
  label?: string;
}

export default function PlatformMenu({ selectedPlatform, label }: Param) {
  const { data } = usePlatformFilter();
  return (
    <Box>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant={"outline"} size="sm">
            {label || "Platform"} <BsBoxArrowDownLeft />
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
