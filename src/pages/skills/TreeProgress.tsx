import { ProgressBar } from "@/Components/ui/progress";
import { Box, Heading, HStack, ProgressRoot, Text } from "@chakra-ui/react";

interface Props {
  label: string;
  items: { label: string; value: number }[];
  spacing?: string;
}

const TreeProgress = ({ label, items, spacing }: Props) => {
  return (
    <Box justifyItems={"start"}>
      <Heading pb={2}>{label}:</Heading>
      {items.map((e) => (
        <HStack py={1} key={e.label}>
          <Text
            textAlign={"start"}
            color={"gray.200"}
            fontFamily={"custom-text"}
            fontSize={17}
            w={spacing ? spacing : "70px"}
          >
            {e.label}
          </Text>
          <ProgressRoot
            width="120px"
            defaultValue={e.value}
            colorPalette={"yellow"}
            variant="subtle"
          >
            <ProgressBar />
          </ProgressRoot>
          <Text fontSize={12} color={"gray.400"}>
            {e.value}%
          </Text>
        </HStack>
      ))}
    </Box>
  );
};

export default TreeProgress;
