import { Text } from "@chakra-ui/react";
import ExpandedText from "../ExpandedText";

interface Props {
  title?: string;
  description?: string;
}

export default function HeadingGame({ title, description }: Props) {
  return (
    <>
      <Text fontSize={"xxx-large"} color={"gray.200"}>
        {title}
      </Text>
      <ExpandedText>{description ? description : ""}</ExpandedText>
    </>
  );
}
