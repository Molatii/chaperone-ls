import React from "react";
import { Box, Stack, VStack } from "@chakra-ui/react";
import FormPanel from "./components/formPanel";
import LeftPanel from "./components/leftPanel";

function App() {

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
         <LeftPanel />
        </VStack>        
        <Stack
          p={{ base: "20", md: "20" }}
          pl={{ base: "5", md: "40" }}
          pr={{ base: "5", md: "40" }}
          w={{ base: "100%", md: "65%" }}>
           <FormPanel />
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
