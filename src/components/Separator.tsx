import { Box } from "@chakra-ui/react";

export function Separator(){
  return(
    <Box
      w="100%"
      maxWidth={1160}
      mt="20"
      mb="14"
      mx="auto"
    >
    <Box
      as="hr"
      h="5px"
      w="180px"
      mx="auto"
      bg="gray.750"
    />
    </Box>
  )
}