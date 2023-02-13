import React from "react";
import
{
    FormControl,
    Image,
    HStack,
    Text,
    Stack,
    FormLabel,
    Button,
    Input,
    InputRightElement,
    InputGroup
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import femaleIcon from "../images/venus-symbol.svg";
import maleIcon from "../images/mars-symbol.svg";
import cardIcon from "../images/card.svg";
import cardWhiteIcon from "../images/card--white.svg";
import calendarIcon from "../images/calendar.svg";
import { motion } from "framer-motion";

function FormPanel() {
     const { register, handleSubmit, reset } = useForm();
     const onSubmit = data => console.log(data);
    return (
        <motion.div
            mt="-3%"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition:{ duration: 0.5 } }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl w="100%" mb="3%" display={{ base: "block", md: "inline-flex"}}>
                    <FormLabel w="30%" color="gray.600" mt={2}>
                        Name
                    </FormLabel>
                    <Input
                        id="name"
                        border="none"
                        bg="gray.50"
                        type='text'
                        size="md"
                        justifySelf="flex-end"
                        w={{ base: "100%", md: "70%"}}
                        placeholder="Paballo Molati"
                        {...register("name")}
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
                            <Text fontSize="sm" color="#cad7dd" pl={3} pt={2}>Male</Text>
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
                            <Text fontSize="sm" color="#cad7dd" pl={3} pt={2}>Female</Text>
                        </Stack>
                    </Stack> 
                </FormControl>
                <FormControl w="100%" mb="3%" display={{ base: "block", md: "inline-flex"}}>
                    <FormLabel w="30%" color="gray.600"  mt={2}>
                        Date Of Birth
                    </FormLabel>
                    <InputGroup
                        border="none"
                        bg="gray.50"
                        type='text'
                        size="md"
                        w={{ base: "100%", md: "70%" }}
                        justifySelf="end"
                        placeholder="02/11/2023"                    
                    
                    >   <Input
                            id="DOB"
                            bg="gray.50"
                            border="none"
                            placeholder="02/11/2023"
                            type='text'
                             {...register("DOB")}
                        />
                        <InputRightElement>
                            <Image src={calendarIcon} alt="calendar_icon" />
                        </InputRightElement>
                        </InputGroup>

                </FormControl>
                    <FormControl mb="3%" display={{ base: "block", md: "inline-flex"}}>
                     <FormLabel  w="30%" color="gray.600"  mt={2}>
                        Email
                    </FormLabel>
                    <Input
                        id="email"
                        border="none"
                        bg="gray.50"
                        type='email'
                        size="md"
                        w={{ base: "100%", md: "70%"}}
                        justifySelf="end"
                        placeholder="molatipaballo@gmail.com"
                         {...register("email")}
                    /> 
                </FormControl>
                <FormControl mb="3%" display={{ base: "block", md: "inline-flex"}}>
                   <FormLabel  w="30%" color="gray.600" mt={2}>
                        Mobile
                    </FormLabel>
                    <Input
                        id="phone"
                        border="none"
                        bg="gray.50"
                        type='text'
                        size="md"
                        w={{ base: "100%", md: "70%"}}
                        justifySelf="end"
                        placeholder="+266 59911982"
                         {...register("phone")}
                    /> 
                </FormControl>
                <FormControl mb="3%" display={{ base: "block", md: "inline-flex"}}>
                   <FormLabel  w="30%" color="gray.600" mt={2}>
                        Customer ID
                    </FormLabel>
                    <Input
                        id="id"
                        border="none"
                        bg="gray.50"
                        type='text'
                        size="md"
                        w={{ base: "100%", md: "70%"}}
                        justifySelf="end"
                        placeholder="5490-Vc828-9877"
                         {...register("id")}
                    /> 
                </FormControl>
                <FormControl mt="4%" mb="12%" display={{ base: "block", md: "inline-flex"}}>
                   <FormLabel  w="30%" color="gray.600" mt={2}>
                        Membership
                    </FormLabel>
                    <HStack gap={{ base: "5%", md: 10 }}>
                        <Stack direction="row" mr={{ base: "4%", md: "8%"}}>
                        <Image
                            src={cardWhiteIcon}
                            rounded="full"
                            bg="#cad7dd"
                            p={2}
                            width={10} 
                            height={10}
                            />
                            <Text
                                fontSize="sm"
                                color="#cad7dd"
                                pl={{ base: "4%", md: "8%" }}
                                pt={2}
                            >
                                Classic
                            </Text>
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
                            <Text
                                fontSize="sm" color="#cad7dd"
                                pl={{ base: "4%", md: "8%" }}
                                pt={2}
                            >
                                Silver
                            </Text>
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
                            <Text
                                fontSize="sm"
                                color="#cad7dd"
                                pl={{ base: "4%", md: "8%" }}
                                pt={2}
                            >
                                Gold
                            </Text>
                        </Stack>  
                    </HStack>
                </FormControl>
                <Stack
                    justifyContent={{ base: "contents", md: "flex-end" }}
                    direction={{ base: "column", md: "row" }}
                >
                    <Button
                        color="#37d40"   
                        bg="#f5f8f9"
                        width={{ base: "full", md: "135px" }}                        
                        onClick={() => reset()}
                    >
                         <Text fontSize={"xs"}>
                           CHANCEL                            
                        </Text>                        
                    </Button>
                     <Button
                        bg="#49c8a8"
                        color="white"
                        type="submit"
                        width={{ base: "full", md: "135px" }}                                             
                    >
                         <Text fontSize={"xs"}>
                           SAVE                            
                        </Text>                        
                    </Button>
                </Stack>
            </form>
        </motion.div>
    )
}

export default FormPanel;