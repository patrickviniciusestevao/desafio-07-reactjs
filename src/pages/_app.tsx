import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../style/theme';

import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

function MyApp({ Component, pageProps }: AppProps){
  return( 
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
