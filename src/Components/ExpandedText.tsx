import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

export default function ExpandedText({ children }: Props) {
  const [isExpanded, setExpanded] = useState(false);
  const limit = 300;
  const submit =
    children.length >= limit
      ? children.substring(0, limit) + "...  "
      : children;

  return (
    <Text color={"gray.400"} fontSize={"1xl"}>
      {isExpanded ? children : submit}
      {children.length >= limit && (
        <Button
          paddingX={4}
          variant={"outline"}
          colorPalette={"yellow"}
          onClick={() => setExpanded(!isExpanded)}
          marginLeft={1}
          size={"xs"}
        >
          {isExpanded ? "Less" : "More"}
        </Button>
      )}
    </Text>
  );
}
