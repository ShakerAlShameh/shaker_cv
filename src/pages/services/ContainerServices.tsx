import { SimpleGrid, Text } from "@chakra-ui/react";
import ServicesItem from "./ServicesItem";

const ContainerServices = () => {
  const items = [
    {
      label: "Web Development",
      logo: "web",
      subTitle: "React,Next js",
    },
    {
      label: "Mobile Development",
      logo: "mobile",
      subTitle: "Flutter,Bloc",
    },
    {
      label: "Windows Application",
      logo: "windows",
      subTitle: "Flutter,C#",
    },
    {
      label: "Database",
      logo: "sql",
      subTitle: "mysql,mongodb",
    },

    {
      label: "Design",
      logo: "design",
      subTitle: "ux,ud,figma",
    },
    {
      label: "Reset Api",
      logo: "api",
      subTitle: "Node js,Next js",
    },
  ];

  return (
    <>
      <Text id="services" pt={10} fontSize={27} fontWeight={"bold"}>
        My Services
      </Text>
      <Text
        w={"80%"}
        pt={5}
        textAlign="center"
        fontSize={16}
        color={"gray.400"}
      >
        Providing custom solutions that keep up with modern technological
        advancements and helping businesses achieve digital success through
        smart applications
      </Text>
      <SimpleGrid py={10} columns={{ base: 1, md: 2, lg: 3 }} gap="44px">
        {items.map((e) => (
          <ServicesItem
            key={e.label}
            label={e.label}
            logo={e.logo}
            subTitle={e.subTitle}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ContainerServices;
