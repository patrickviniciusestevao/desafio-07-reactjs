import { Flex, Image, Button, Icon } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";

export function Header(){
  return(
    <Flex
      as="header"
      w="100%"
      maxWidth={1240}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      {/* <Button
        aria-label="Open navigation"
        onClick={()=> {}}
        bg="transparent"
        border="0"
        _hover={{
          bdColor: "transparent"
        }}
        _focus={{
          bdColor: "transparent"
        }}
      >
        <Icon as={FiChevronLeft} w={7} h={7} />
      </Button> */}
      <Image mx="auto" src="/images/logo.png" alt="logo" />
    </Flex>
  )
}