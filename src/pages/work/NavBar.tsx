import { Box, Flex, IconButton } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  FaGraduationCap,
  FaRegHandshake,
  FaTools,
  FaPhoneAlt,
} from "react-icons/fa";

const MotionBox = motion.create(Box);

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 100], [0.95, 1]);

  const sections = [
    { id: "userInfo", label: <AiOutlineInfoCircle /> },
    { id: "services", label: <FaRegHandshake /> },
    { id: "history", label: <FaTools /> },
    { id: "education", label: <FaGraduationCap /> },
    { id: "contact", label: <FaPhoneAlt /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <MotionBox
      position="fixed"
      top={"30%"}
      right={4}
      borderRadius={"xl"}
      w={{ base: "20%", lg: "5%" }}
      justifyItems={"center"}
      bg="rgba(175, 180, 151, 0.1)"
      zIndex="999"
      py={{ base: 2, md: 3 }}
      boxShadow="lg"
      style={{ y: yRange }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        maxW="60%"
        mx="auto"
        direction={"column"}
        justify="space-around"
        gap={{ base: 1, md: 4 }}
        overflowX="auto"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {sections.map(({ id, label }) => (
          <IconButton
            key={id}
            colorPalette="yellow"
            variant={activeSection === id ? "solid" : "ghost"}
            flexShrink={0}
            size={"sm"}
            onClick={() => scrollToSection(id)}
          >
            {label}
          </IconButton>
        ))}
      </Flex>
    </MotionBox>
  );
};
