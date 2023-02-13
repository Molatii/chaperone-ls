import { Button, Text } from "@chakra-ui/react";

function FormButton(props) { 
     const { name, bg, color } = props;
    return (
      <>
            <Button
                color={color}
                width={{ base: "full", md: "135px" }}
                bg={bg}>
                <Text fontSize={"xs"}>
                    {name}
                </Text>
            </Button>          
      </>
    ); 
  }
  export default FormButton;