import { Flex, Image, Text } from "@chakra-ui/react";

interface CategoryProps {
  src: string;
  alt: string;
  title: string;
}

export function Category({src, alt ,title}: CategoryProps){
  return(
    <Flex
      direction="column"
    >
      <Image mx="auto" src={src} alt={alt} />
      <Text mt="6" fontSize="24px" fontWeight="600" >{title}</Text>
    </Flex>
  )
}