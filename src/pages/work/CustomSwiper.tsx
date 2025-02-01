import { SimpleGrid } from "@chakra-ui/react";
import CardSwiper from "./CardSwiper";
import MacCar from "./../../assets/mac-car.svg";
import Zer from "./../../assets/zer.svg";
import Sarwaran from "./../../assets/sarwaran.svg";
import Plant from "./../../assets/plant.png";
import TSC from "./../../assets/tsc.png";

const CustomSwiper = () => {
  const items = [
    { id: "mac", label: "Mansour Car", image: MacCar },
    { id: "zer", label: "Zer Groups", image: Zer },
    { id: "sarwaran", label: "Sarwaran", image: Sarwaran },
    { id: "health", label: "Health Nutrition", image: Plant, fit: "cover" },
    {
      id: "tsc",
      label: "TSC Printer",
      image: TSC,
      padding: 0,
      fit: "contain",
    },
  ];
  return (
    <SimpleGrid py={10} columns={{ base: 1, md: 2, lg: 3 }} gap="44px">
      {items.map((e) => (
        <CardSwiper
          key={e.id}
          id={e.id}
          image={e.image}
          label={e.label}
          fit={e.fit}
          padding={e.padding}
        />
      ))}
    </SimpleGrid>
  );
};

export default CustomSwiper;
