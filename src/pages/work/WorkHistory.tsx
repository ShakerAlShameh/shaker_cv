import { Text } from "@chakra-ui/react";
import CustomSwiper from "./CustomSwiper";

const WorkHistory = () => {
  return (
    <>
      <Text id="history" pt={10} fontSize={27} fontWeight={"bold"}>
        Work History
      </Text>
      <Text
        w={"80%"}
        pt={5}
        textAlign="center"
        fontSize={16}
        color={"gray.400"}
      >
        Throughout my career, I have worked on diverse projects, developing and
        maintaining high-quality applications across different technologies.
      </Text>
      <CustomSwiper />
    </>
  );
};

export default WorkHistory;
