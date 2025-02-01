import { Container, Flex, SimpleGrid } from "@chakra-ui/react";
import ContainerUserInfo from "./ContainerUserInfo";
import ContainerServices from "./services/ContainerServices";
import LanguagesContainer from "./skills/LanguagesContainer";
import SkillsContainer from "./skills/SkillsContainer";
import ExtraSkillsContainer from "./skills/ExtraSkillsContainer";
import ContainerEducation from "./education/ContainerEducation";
import WorkHistory from "./work/WorkHistory";
import { NavBar } from "./work/NavBar";
import ContactContainer from "./contact/ContactContainer";

const HomePage = () => {
  return (
    <Container boxSizing={"content-box"} centerContent>
      <NavBar />
      <Flex
        maxW={"100%"}
        direction={"column"}
        placeItems={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        margin={"0 auto"}
      >
        <ContainerUserInfo />
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gapX={{ base: "10px", md: "100px", lg: "200px" }}
          mt={"20px"}
          gapY={{ base: "20px" }}
          justifyItems={"center"}
        >
          <LanguagesContainer />
          <SkillsContainer />
          <ExtraSkillsContainer />
        </SimpleGrid>
        <ContainerServices />
        <WorkHistory />
        <ContainerEducation />
        <ContactContainer />
      </Flex>
    </Container>
  );
};

export default HomePage;
