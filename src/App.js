import React, { useState } from "react";
import { Box, Stack, VStack } from "@chakra-ui/react";
import FormPanel from "./components/formPanel";
import LeftPanel from "./components/leftPanel";
import ContentPanel from "./components/contentPanel";
import { animateScroll as scroll } from "react-scroll";

function App() {
  const [showContent, setShowContent] = useState(true);

  // Scroll to Panel
  const panel = () => {
    scroll.scrollTo(705);
  };
  
  function changePanel(){
    setShowContent(!showContent);
    panel();
  }
 
  return (
    <Box w="100%" h={{ base: "100%", md: "100vh"}}>    
      <Stack
        w="100%"
        h="100%"
        spacing={0}
        direction={{ base: "column", md: "row" }}
      >
        <VStack
          bg="#ffd300"
          w={{ base: "100%", md: "35%"}}
          alignItems="center"
          p={{ base: "20", md: "20" }}
        >
         <LeftPanel changePanel={changePanel} showContent={showContent} />
        </VStack>        
        <Stack
          p={{ base: "20", md: "20" }}
          pl={{ base: "5", md: "40" }}
          pr={{ base: "5", md: "40" }}
          bg={{
            base: showContent ?
              "#373d40" : "#ff9200",
            md: showContent ?
              "white" : "#ff9200"
          }}
          w={{ base: "100%", md: "65%" }}
        >         
          {
            showContent ? (
               <FormPanel/>
            ) : (
                <ContentPanel />
            )
          }         
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
