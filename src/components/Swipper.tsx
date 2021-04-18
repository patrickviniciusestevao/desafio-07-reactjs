import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Box, Flex, Text } from '@chakra-ui/react';

SwiperCore.use([Navigation, Pagination])

export function CustomSwiper(){

  return(
    <Box
      position="relative"
    >
      <Swiper
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          el: '.swiper-pagination',
          clickable: true,
        }}
      >
        <SwiperSlide>
          <Flex
            backgroundImage="url('/images/europe.png')"
            backgroundRepeat="no-repeat"
            maxWidth={1240}
            maxHeight={450}
            mx="auto"
            w="100%"
            h="100%"
            direction="column"
            align="center"
            justify="center"
            py="180px"
            mb="40px"
          >
            <Text fontWeight="700" fontSize="72px" color="gray.50" >Europa</Text>
            <Text fontWeight="700" fontSize="24px" color="gray.50">O continente mais antigo.</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            backgroundImage="url('/images/europe.png')"
            backgroundRepeat="no-repeat"
            maxWidth={1240}
            maxHeight={450}
            mx="auto"
            w="100%"
            h="100%"
            direction="column"
            align="center"
            justify="center"
            py="180px"
            mb="40px"
          >
            <Text fontWeight="700" fontSize="72px" color="gray.50" >Europa</Text>
            <Text fontWeight="700" fontSize="24px" color="gray.50">O continente mais antigo.</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            backgroundImage="url('/images/europe.png')"
            backgroundRepeat="no-repeat"
            maxWidth={1240}
            maxHeight={450}
            mx="auto"
            w="100%"
            h="100%"
            direction="column"
            align="center"
            justify="center"
            py="180px"
            mb="40px"
          >
            <Text fontWeight="700" fontSize="72px" color="gray.50" >Europa</Text>
            <Text fontWeight="700" fontSize="24px" color="gray.50">O continente mais antigo.</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            backgroundImage="url('/images/europe.png')"
            backgroundRepeat="no-repeat"
            maxWidth={1240}
            maxHeight={450}
            mx="auto"
            w="100%"
            h="100%"
            direction="column"
            align="center"
            justify="center"
            py="180px"
            mb="40px"
          >
            <Text fontWeight="700" fontSize="72px" color="gray.50" >Europa</Text>
            <Text fontWeight="700" fontSize="24px" color="gray.50">O continente mais antigo.</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            backgroundImage="url('/images/europe.png')"
            backgroundRepeat="no-repeat"
            maxWidth={1240}
            maxHeight={450}
            mx="auto"
            w="100%"
            h="100%"
            direction="column"
            align="center"
            justify="center"
            py="180px"
            mb="40px"
          >
            <Text fontWeight="700" fontSize="72px" color="gray.50" >Europa</Text>
            <Text fontWeight="700" fontSize="24px" color="gray.50">O continente mais antigo.</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            backgroundImage="url('/images/europe.png')"
            backgroundRepeat="no-repeat"
            maxWidth={1240}
            maxHeight={450}
            mx="auto"
            w="100%"
            h="100%"
            direction="column"
            align="center"
            justify="center"
            py="180px"
            mb="40px"
          >
            <Text fontWeight="700" fontSize="72px" color="gray.50" >Europa</Text>
            <Text fontWeight="700" fontSize="24px" color="gray.50">O continente mais antigo.</Text>
          </Flex>
        </SwiperSlide>

        <Box
          className="swiper-button-prev"
          position="absolute"
          left="150px"
          bottom="0"
          color="yellow.500"
        />
        <Box
          className="swiper-button-next"
          position="absolute"
          right="150px"
          bottom="0"
          color="yellow.500"
        />
        <Box
          className="swiper-pagination"
          position="absolute"
          bottom="55px"
          color="yellow.500"
        />
      </Swiper>
    </Box>
  )
}