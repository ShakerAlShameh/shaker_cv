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
import { Field } from "@/Components/ui/field";
import { AiOutlineCompass, AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { Toaster, toaster } from "@/Components/ui/toaster";

interface FormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
const ContactContainer = () => {
  const { register, handleSubmit } = useForm<FormProps>();
  const [loading, setLoading] = useState(false);

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
        <GridItem colSpan={{ base: 6, md: 2, lg: 2 }}>
          <Heading mb={5} textAlign={"start"}>
            Leave us your Information
          </Heading>
          <Card.Root p={5}>
            <form
              onSubmit={handleSubmit(async (data) => {
                setLoading(true);
                const { error } = await supabase.from("emails").insert(data);
                setLoading(false);
                if (error)
                  toaster.create({
                    title: `Error!!`,
                    type: "error",
                  });
                toaster.create({
                  title: `Email Send Success`,
                  type: "success",
                });
              })}
            >
              <Field
                colorPalette={"yellow"}
                label="Full Name"
                required
                errorText=""
              >
                <Input
                  {...register("name")}
                  placeholder="Enter your full name"
                />
              </Field>
              <Field
                my={5}
                colorPalette={"yellow"}
                label="Email"
                required
                errorText=""
              >
                <Input {...register("email")} placeholder="Enter your email" />
              </Field>
              <Field colorPalette={"yellow"} label="Subject" errorText="">
                <Input
                  {...register("subject")}
                  placeholder="Enter your subject"
                />
              </Field>
              <Field
                my={5}
                colorPalette={"yellow"}
                label="Message"
                errorText=""
              >
                <Textarea
                  {...register("message")}
                  placeholder="Enter your Message"
                />
              </Field>
              <Button
                disabled={loading}
                type="submit"
                my={5}
                colorPalette={"yellow"}
              >
                SEND MESSAGE
              </Button>
              <Toaster />
            </form>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 1, lg: 1 }}>
          <Heading mb={5} textAlign={"start"}>
            Contact Information
          </Heading>
          <Card.Root p={5}>
            <Card.Root alignItems={"center"} pb={9}>
              <Box p={5}>
                <AiOutlineCompass color="yellow" size={"30px"} />
              </Box>
              <HStack px={5} justify="space-between" w="full">
                <Text textStyle={"sm"}>Country:</Text>
                <Text textStyle={"sm"}>Syria</Text>
              </HStack>
              <HStack px={5} justify="space-between" w="full">
                <Text textStyle={"sm"}>City:</Text>
                <Text textStyle={"sm"}>Damascus</Text>
              </HStack>
            </Card.Root>
            <Card.Root mt={5} alignItems={"center"} pb={9}>
              <Box p={5}>
                <AiOutlineMail color="yellow" size={"30px"} />
              </Box>
              <HStack px={5} justify="space-between" w="full">
                <Text textStyle={"sm"}>Email:</Text>
                <Text ml="auto" textStyle={"sm"}>
                  shakershame6@gmail.com
                </Text>
              </HStack>
              <HStack px={5} justify="space-between" w="full">
                <Text textStyle={"sm"}>Phone Number:</Text>
                <Text textStyle={"sm"}>+963998552006</Text>
              </HStack>
            </Card.Root>
          </Card.Root>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default ContactContainer;
