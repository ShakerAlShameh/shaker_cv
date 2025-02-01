import { Box, Card, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const ContainerEducation = () => {
  return (
    <>
      <Text id="education" pt={10} fontSize={27} fontWeight={"bold"}>
        Education
      </Text>
      <Text
        w={"80%"}
        pt={5}
        textAlign="center"
        fontSize={16}
        color={"gray.400"}
      >
        Throughout my academic journey, I was committed to staying up-to-date
        with emerging technologies and explored areas like web development, and
        mobile app development to expand my knowledge base.
      </Text>
      <Card.Root mt={10} p={5} m={5} w={{ base: "100%", md: "80%", lg: "80%" }}>
        <HStack alignItems={"start"} justifyContent="top">
          <Stack>
            <Box w={{ base: "120px", md: "250px" }}>
              <Heading>Damascus University</Heading>
              <HStack spaceX={2}>
                <Text color={"gray.400"}>Student</Text>
                <Text color={"yellow"}>Jan 2019-Dec 2022</Text>
              </HStack>
            </Box>
          </Stack>
          <Stack>
            <Heading>Computer Science</Heading>
            <Text textStyle={"sm"} color={"gray.400"}>
              During my time at college, I actively participated in projects
              that enhanced my skills in problem-solving, collaboration, and
              technical innovation. I also had the opportunity to apply
              theoretical concepts in real-world scenarios, working on hands-on
              projects that sharpened my coding abilities and helped me develop
              software solutions with efficiency and precision.
            </Text>
          </Stack>
        </HStack>
        <HStack pt={10} alignItems={"start"} justifyContent="top">
          <Stack>
            <Box w={{ base: "120px", md: "250px" }}>
              <Heading>New Horizon</Heading>
              <HStack spaceX={2}>
                <Text color={"gray.400"}>Student</Text>
                <Text color={"yellow"}>Mar 2020-Dec 2023</Text>
              </HStack>
            </Box>
          </Stack>
          <Stack>
            <Heading>Flutter , Firebase</Heading>
            <Text textStyle={"sm"} color={"gray.400"}>
              Building applications with Flutter, I write clear, maintainable
              code in Dart, focusing on bug elimination through unit and
              integration testing. I integrate RESTful APIs, optimize
              performance, and use Git for version control. With expertise in
              OOP, state management (Provider, Bloc), Firebase, and agile
              methodologies, I collaborate with teams to deliver responsive,
              high-quality UIs and meet project deadlines.
            </Text>
            <Heading pt={2}>React , Next-js ,Node-js </Heading>
            <Text textStyle={"sm"} color={"gray.400"}>
              Building dynamic web apps with React and Next.js, I focus on
              writing clean, scalable code and ensuring fast performance through
              server-side rendering and static site generation. I integrate
              RESTful APIs with Node.js, implement state management using Redux
              or Context API, and follow agile methodologies. With strong
              debugging, performance optimization, and collaboration skills, I
              deliver responsive, high-quality apps that meet deadlines and
              provide seamless user experiences.
            </Text>
          </Stack>
        </HStack>
      </Card.Root>
    </>
  );
};

export default ContainerEducation;
