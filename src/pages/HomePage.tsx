import { SimpleGrid, Stack } from "@chakra-ui/react";
import ContainerUserInfo from "./ContainerUserInfo";
import "./home.css";
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
    <>
      <NavBar />
      <Stack
        maxW={"100vw"}
        display={"flex"}
        placeItems={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
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
      </Stack>
    </>
  );
};

export default HomePage;
