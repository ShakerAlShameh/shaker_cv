import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  titles: string;
  children: ReactNode | ReactNode[];
}

export default function DetailsGame({ titles, children }: Props) {
  return (
    <>
      <Heading size={"xl"} as={"dt"}>
        {titles}
      </Heading>
      <Heading as={"dd"} fontWeight={"normal"} size={"sm"} color={"gray.400"}>
        {children}
      </Heading>
    </>
  );
}
