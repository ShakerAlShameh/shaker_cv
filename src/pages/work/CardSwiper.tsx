import { Card, Heading, Image } from "@chakra-ui/react";

interface Props {
  id: string;
  label: string;
  image: string;
  fit?: string;
  padding?: number;
}

const CardSwiper = ({ label, image, id, fit, padding }: Props) => {
  return (
    <Card.Root
      cursor={"button"}
      _hover={{ transform: "scale(1.03)", transition: ".13s ease-in" }}
      overflow="hidden"
      borderRadius={12}
      onClick={() => window.open("project/" + id, "_blank", "noreferrer")}
      w={80}
    >
      <Image
        h={"190px"}
        px={padding ? padding : 10}
        fit={fit ? fit : "fill"}
        src={image}
      />

      <Card.Footer>
        <Heading>{label}</Heading>
      </Card.Footer>
    </Card.Root>
  );
};

export default CardSwiper;
