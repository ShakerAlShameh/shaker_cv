import {
  Box,
  Button,
  Card,
  Flex,
  Text,
  Image,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";

const ContainerUserInfo = () => {
  const scrollToSection = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Card.Root
      id="userInfo"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={10}
      mt={5}
      w={"80%"}
    >
      <Flex py={10}>
        <Box>
          <Text
            fontFamily="custom-text"
            fontWeight={"bold"}
            textStyle={"3xl"}
            flex={"none"}
          >
            I'm Shaker Abo Shame
          </Text>
          <Flex gapX={"3px"}>
            <Text fontWeight={"bold"} textStyle={"3xl"} color={"yellow"}>
              Full-Stack
            </Text>
            <Text fontFamily="custom-text" textStyle={"3xl"}>
              Developer
            </Text>
          </Flex>
          <Text
            mt={4}
            w={"90%"}
            lineClamp={"5"}
            textStyle={"sm"}
            color={"gray.400"}
          >
            Fullstack Developer with over 3 years of experience in designing and
            implementing both front-end and back-end solutions. Proven expertise
            in creating efficient, scalable, and maintainable code for diverse
            projects across mobile and web applications. Skilled in working with
            a wide range of technologies including Flutter, React, Node.js,
            Next.js,and databases to build dynamic and responsive software
            solutions. Adept at collaborating with cross-functional teams to
            deliver high-quality software within deadlines. Passionate about
            staying up-to-date with the latest web and mobile development
            advancements and continuously enhancing technical skills.
          </Text>
          <Button
            onClick={() => scrollToSection()}
            mt={9}
            colorPalette="yellow"
            variant="outline"
          >
            HIRE ME <RiArrowRightLine />
          </Button>
        </Box>
        <Show when={useBreakpointValue({ base: false, md: true, lg: true })}>
          <Image
            pr={20}
            w={"200px"}
            fit={"fill"}
            src="../src/assets/avatar.svg"
          />
        </Show>
      </Flex>
    </Card.Root>
  );
};

export default ContainerUserInfo;
