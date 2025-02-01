import { Box, Card, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  label: string;
  subTitle: string;
  logo: string;
}

const ServicesItem = ({ label, logo, subTitle }: Props) => {
  return (
    <Box>
      <Card.Root p={5} alignItems={"center"} justifyContent={"center"} w={80}>
        <Image
          w={"100px"}
          h={"70px"}
          fit={"fill"}
          src={`../src/assets/${logo}.svg`}
        />
        <Heading pb={3} pt={7} className="custom-text">
          {label}
        </Heading>
        <Text fontSize={12} color={"gray.400"}>
          {subTitle}
        </Text>
      </Card.Root>
    </Box>
  );
};

export default ServicesItem;
