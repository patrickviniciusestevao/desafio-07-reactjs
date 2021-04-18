import { Flex } from "@chakra-ui/react";
import { Category } from "./Category";

export function Categories(){
  return(
    <Flex
      w="100%"
      maxWidth={1160}
      mx="auto"
      mt="32"
      align="center"
      justify="space-between"
    >
     <Category src="/images/cocktail.svg" alt="" title="Vida noturna" />
     <Category src="/images/surf.svg" alt="" title="Praia" />
     <Category src="/images/building.svg" alt="" title="Moderno" />
     <Category src="/images/museum.svg" alt="" title="Clássico" />
     <Category src="/images/earth.svg" alt="" title="e mais..." />
    </Flex>
  )
}