import React from "react";
import { Stack, Text, Image } from "@chakra-ui/react";
import faceIcon from "../images/face.svg";
import arrowIcon from "../images/arrow.svg";

function LeftPanel (props){

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
          <Stack 
            pt={{ base: "8%", md: "15%" }}
        >
          
          {
            props.showContent ? (<Image
              onClick={props.changePanel}
              transform={{
                base: "rotate(90deg)",
                md: "rotate(0deg)"
              }}
              src={arrowIcon}
              width="50px"          
              height="50px"         
              alt="arrow-Icon"           
              borderRadius="full"          
              backgroundColor="#373d40"         
              cursor="pointer"            
              p={3}
              />
              )
              :
              (
              <Image
              onClick={props.changePanel}
                  transform={{
                    base: "rotate(270deg)",
                    md: "rotate(180deg)"
                  }}
              src={arrowIcon}
              width="50px"          
              height="50px"         
              alt="arrow-Icon"           
              borderRadius="full"          
              backgroundColor="#373d40"         
              cursor="pointer"            
              p={3}
              />)
          }
            
        </Stack>
        </>
    )
}

export default LeftPanel;