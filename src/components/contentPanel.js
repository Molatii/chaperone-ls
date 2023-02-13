import { Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function ContentPanel() { 
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Heading
                fontFamily="sans-serif"
                color="#373d40"
                fontSize="2xl"
                mt="2%"
                mb="4%"
            >
                My World today
            </Heading>     
            <Text>
                When referring to any work that is NOT a journal,
                such as a book, article, or Web page, capitalise
                only the first letter of the first word of a title
                and subtitle, the first word after a colon or a dash
                in the title, and proper nouns. Do not capitalise the
                first letter of the second word in a hyphenated compound word.
                When referring to any work that is NOT a journal,
                such as a book, article, or Web page, capitalise
                only the first letter of the first word of a title
                and subtitle, the first word after a colon or a dash
                in the title, and proper nouns. Do not capitalise the
                first letter of the second word in a hyphenated compound word.
                When referring to any work that is NOT a journal,
                such as a book, article, or Web page, capitalise
                only the first letter of the first word of a title
                and subtitle, the first word after a colon or a dash
                in the title, and proper nouns. Do not capitalise the
                first letter of the second word in a hyphenated compound word.
            </Text>
            
      </motion.div>
    ); 
  }
  export default ContentPanel;