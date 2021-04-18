import { Text } from "@chakra-ui/react";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Landing } from "../components/Landing";
import { Separator } from "../components/Separator";
import { CustomSwiper } from "../components/Swipper";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Categories />
      <Separator />
      <Text fontSize="36px" fontWeight="500" maxWidth={840} textAlign="center" mx="auto" mb="14" >
        Vamos nessa?
        <br/>
        Então escolha seu continente
      </Text>
      <CustomSwiper />
    </>
  )
}
