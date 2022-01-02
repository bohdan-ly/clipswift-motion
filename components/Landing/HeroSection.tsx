import React, { ReactElement } from "react";
import Image from "next/image";
import { Box, Button, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import { FiDownload, FiMail, FiArrowDown } from "react-icons/fi";

import MotionBox from "../MotionBox";
import Nav from "../Nav";
import heroPattern from "../../public/img/hero.png";

function HeroSection(): ReactElement {
  return (
    <Box height={"100vh"}>
      <Nav />
      <Flex
        as="section"
        justifyContent="space-between"
        height={["80%", "90%"]}
        alignItems={["flex-end", "center"]}
      >
        <Box>
          <MotionBox
            as={Heading}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            fontWeight="700"
            fontSize={["6xl", "7xl"]}
            lineHeight="100%"
          >
            Nishchay{" "}
            <Box as="span" fontSize={["6xl", "7xl"]} fontWeight="500">
              Trivedi
            </Box>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            as={Text}
            fontSize={"2xl"}
            mt="1rem"
            lineHeight="110%"
          >
            Creating Web Experiences And More
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            as={Flex}
            mt="2rem"
            flexDirection={["column", "row"]}
          >
            <Tooltip label="Download me 🚀">
              <a
                href={process.env.NEXT_PUBLIC_RESUME}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  isFullWidth={false}
                  colorScheme="teal"
                  leftIcon={<FiDownload size="1.2rem" />}
                >
                  Download Resume
                </Button>
              </a>
            </Tooltip>
            <a href="mailto:nishchay13971@gmail.com">
              <MotionBox
                as={Button}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.1 },
                }}
                isFullWidth={false}
                leftIcon={<FiMail size="1.2rem" />}
                colorScheme="teal"
                variant="outline"
                ml={[0, "1rem"]}
                mt={["1rem", 0]}
              >
                Get In Touch
              </MotionBox>
            </a>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            as={Flex}
            opacity="0.6"
            alignItems="center"
            mt="5rem"
          >
            <Text>Scroll down to know more</Text>
            <MotionBox
              animate={{
                y: [-5, 5, -5],
                transition: { duration: 2, repeat: Infinity, delay: 1 },
              }}
            >
              <Box ml="0.5rem">
                <FiArrowDown />
              </Box>
            </MotionBox>
          </MotionBox>
        </Box>
        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          display={["none", "none", "block"]}
          width="clamp(300px,25vw, 350px)"
        >
          <Image
            src={heroPattern}
            alt="pattern"
            quality={100}
            priority
            draggable={false}
          />
        </MotionBox>
      </Flex>
    </Box>
  );
}

export default HeroSection;
