import { Field } from "@/Components/ui/field";
import { AiOutlineCompass, AiOutlineMail } from "react-icons/ai";
import {
  Text,
  Button,
  Card,
  Input,
  SimpleGrid,
  Textarea,
  Heading,
  GridItem,
  HStack,
  Box,
} from "@chakra-ui/react";

const ContactContainer = () => {
  return (
    <>
      <Text id="contact" pt={10} fontSize={27} fontWeight={"bold"}>
        Contact
      </Text>
      <Text
        pt={5}
        w={"80%"}
        textAlign="center"
        fontSize={16}
        color={"gray.400"}
      >
        Feel free to reach out if you have any questions, need support, or want
        to collaborate on an exciting project. I'm always open to new
        opportunities and would love to hear from you!
      </Text>
      <SimpleGrid p={10} columns={{ base: 1, md: 3 }} gapX={16} gapY={3}>
        <GridItem colSpan={2}>
          <Heading mb={5} textAlign={"start"}>
            Leave us your Information
          </Heading>
          <Card.Root p={5}>
            <form>
              <Field
                colorPalette={"yellow"}
                label="Full Name"
                required
                errorText=""
              >
                <Input placeholder="Enter your full name" />
              </Field>
              <Field
                my={5}
                colorPalette={"yellow"}
                label="Email"
                required
                errorText=""
              >
                <Input placeholder="Enter your email" />
              </Field>
              <Field colorPalette={"yellow"} label="Subject" errorText="">
                <Input placeholder="Enter your subject" />
              </Field>
              <Field
                my={5}
                colorPalette={"yellow"}
                label="Message"
                errorText=""
              >
                <Textarea placeholder="Enter your Message" />
              </Field>
              <Button my={5} colorPalette={"yellow"}>
                SEND MESSAGE
              </Button>
            </form>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1, lg: 1 }}>
          <Heading mb={5} textAlign={"start"}>
            Contact Information
          </Heading>
          <Card.Root p={5}>
            <Card.Root alignItems={"center"} pb={9}>
              <Box p={5}>
                <AiOutlineCompass color="yellow" size={"30px"} />
              </Box>
              <HStack px={5} justify="space-between" w="full">
                <Text>Country:</Text>
                <Text>Syria</Text>
              </HStack>
              <HStack px={5} justify="space-between" w="full">
                <Text>City:</Text>
                <Text>Damascus</Text>
              </HStack>
            </Card.Root>
            <Card.Root mt={5} alignItems={"center"} pb={9}>
              <Box p={5}>
                <AiOutlineMail color="yellow" size={"30px"} />
              </Box>
              <HStack px={5} justify="space-between" w="full">
                <Text>Email:</Text>
                <Text ml="auto">shakershame6@gmail.com</Text>
              </HStack>
              <HStack px={5} justify="space-between" w="full">
                <Text>Phone Number:</Text>
                <Text>+963998552006</Text>
              </HStack>
            </Card.Root>
          </Card.Root>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default ContactContainer;
