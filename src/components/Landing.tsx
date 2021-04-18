import { Flex, Image, Text } from "@chakra-ui/react";

export function Landing(){
  return(
    <Flex
      w="100%"
      maxHeight={335}
      mx="auto"
      align="center"
      backgroundImage="url('/images/background.jpg')"
      backgroundPosition="center -1300px"
      backgroundRepeat="no-repeat"
      py='20'
    >
      <Flex
        w="100%"
        maxWidth={1240}
        mx="auto"
        align="center"
        justify="space-between"
        position="relative"
      >
        <Flex
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <Text fontSize={36} color="gray.50" maxWidth={425} >5 Continentes, infinitas possibilidades.</Text>
          <Text fontSize={20} color="gray.50" maxWidth={525} >Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Flex>
        <Image src="/images/airplane.svg" alt="airplane" position="absolute" bottom={-120} right="0" />
      </Flex>
    </Flex>
  )
}