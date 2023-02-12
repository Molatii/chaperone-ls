import React from "react";
import { Stack, Text, Image } from "@chakra-ui/react";
import faceIcon from "../images/face.svg";
import arrowIcon from "../images/arrow.svg";

function LeftPanel() {
    return (
        <>
          <Stack mt="5%" mb="20%">
            <img
              src={faceIcon}
              width="200px"
              height="200px"
              alt="user-Icon" />
          </Stack>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
          >
            Font-end challenge!
          </Text>
          <Text
            fontFamily="sans-serif"
            textAlign="center"
            pl={{ base: "2", md: "8"}}
            pr={{base: "2", md: "8"}}
          >
            This is a design that you will need to code up and impress us.
          </Text>
          <Stack pt={{ base: "8%", md: "15%"}}>
            <Image
              src={arrowIcon}
              width="50px"
              height="50px"
              alt="arrow-Icon"
              borderRadius="full"
              backgroundColor="gray.700"
              cursor="pointer"
              p={3}
            />
        </Stack>
        </>
    )
}

export default LeftPanel;