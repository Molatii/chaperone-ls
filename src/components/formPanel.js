import React from "react";
import { Box, FormControl, Image, HStack, Text, Stack, FormLabel, Input, Button } from "@chakra-ui/react";
import femaleIcon from "../images/venus-symbol.svg";
import maleIcon from "../images/mars-symbol.svg";
import cardIcon from "../images/card.svg";
import cardWhiteIcon from "../images/card--white.svg";

function FormPanel() {
    return (
        <Box mt="-3%">
            <from>
                <FormControl w="100%" mb="3%" display={{ base: "block", md: "inline-flex"}}>
                    <FormLabel w="30%" color="gray.600" mt={2}>
                        Name
                    </FormLabel>
                    <Input
                        border="none"
                        bg="gray.50"
                        type='text'
                        size="md"
                        justifySelf="flex-end"
                        w={{ base: "100%", md: "70%"}}
                        placeholder="Paballo Molati"
                    /> 
                </FormControl>
                <FormControl w="100%" mb="3%" display={{ base: "block", md: "inline-flex"}}>
                    <FormLabel w="30%" color="gray.600" mt={2}>
                        Gender
                    </FormLabel>
                    <Stack direction="row" size="lg" w={{ base: "100%", md: "70%"}}>
                      <Stack direction="row" mr="10%">
                        <Image
                            src={maleIcon}
                            rounded="full"
                            bg="gray.50"
                            p={2}
                            width={10} 
                            height={9}
                            />
                            <Text fontSize="sm" color="gray.400" pl={3} pt={2}>Male</Text>
                        </Stack>
                        <Stack direction="row">
                        <Image
                            src={femaleIcon}
                            rounded="full"
                            bg="gray.50"
                            p={2}
                            width={10}
                            height={9}
                        />
                            <Text fontSize="sm" color="gray.400" pl={3} pt={2}>Female</Text>
                        </Stack>
                    </Stack> 
                </FormControl>
                <FormControl w="100%" mb="3%" display={{ base: "block", md: "inline-flex"}}>
                    <FormLabel w="30%" color="gray.600"  mt={2}>
                        Date Of Birth
                    </FormLabel>
                    <Input
                        border="none"
                        bg="gray.50"
                        type='text'
                        size="md"
                        w={{ base: "100%", md: "70%" }}
                        justifySelf="end"
                        placeholder="02/11/2023"
                    /> 
                </FormControl>
                    <FormControl mb="3%" display={{ base: "block", md: "inline-flex"}}>
                     <FormLabel  w="30%" color="gray.600"  mt={2}>
                        Email
                    </FormLabel>
                    <Input
                        border="none"
                        bg="gray.50"
                        type='text'
                        size="md"
                        w={{ base: "100%", md: "70%"}}
                        justifySelf="end"
                        placeholder="molatipaballo@gmail.com"
                    /> 
                </FormControl>
                <FormControl mb="3%" display={{ base: "block", md: "inline-flex"}}>
                   <FormLabel  w="30%" color="gray.600" mt={2}>
                        Mobile
                    </FormLabel>
                    <Input
                        border="none"
                        bg="gray.50"
                        type='text'
                        size="md"
                        w={{ base: "100%", md: "70%"}}
                        justifySelf="end"
                        placeholder="+266 59911982"
                    /> 
                </FormControl>
                <FormControl mb="3%" display={{ base: "block", md: "inline-flex"}}>
                   <FormLabel  w="30%" color="gray.600" mt={2}>
                        Customer ID
                    </FormLabel>
                    <Input
                        border="none"
                        bg="gray.50"
                        type='text'
                        size="md"
                        w={{ base: "100%", md: "70%"}}
                        justifySelf="end"
                        placeholder="5490-Vc828-9877"
                    /> 
                </FormControl>
                <FormControl mt="4%" mb="15%" display={{ base: "block", md: "inline-flex"}}>
                   <FormLabel  w="30%" color="gray.600" mt={2}>
                        Membership
                    </FormLabel>
                    <HStack gap={{ base: "5%", md: 10 }}>
                        <Stack direction="row" mr={{ base: "4%", md: "8%"}}>
                        <Image
                            src={cardWhiteIcon}
                            rounded="full"
                            bg="gray.400"
                            p={2}
                            width={10} 
                            height={10}
                            />
                            <Text fontSize="sm" color="gray.400" pl={{ base: "4%", md: "8%" }} pt={2}>Classic</Text>
                        </Stack>
                        <Stack direction="row" mr={{ base: "4%", md: "8%" }}>
                        <Image
                            src={cardIcon}
                            rounded="full"
                            bg="gray.50"
                            p={2}
                            width={10} 
                            height={10}
                            />
                            <Text fontSize="sm" color="gray.400" pl={{ base: "4%", md: "8%" }} pt={2}>Silver</Text>
                        </Stack>
                        <Stack direction="row">
                        <Image
                            src={cardIcon}
                            rounded="full"
                            bg="gray.50"
                            p={2}
                            width={10}
                            height={10}
                        />
                        <Text fontSize="sm" color="gray.400" pl={{ base: "4%", md: "8%" }} pt={2}>Gold</Text>
                        </Stack>  
                    </HStack>
                </FormControl>
                <Stack>
                    <Button>CHANCEL</Button>
                    <Button>SAVE</Button>
                </Stack>
            </from>
        </Box>
    )
}

export default FormPanel;