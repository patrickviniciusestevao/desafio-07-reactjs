import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors : {
    yellow: {
      "500": "#FFBA08",
      "200": "rgba(255, 186, 8, 0.5)",
    },
    gray: {
      "900": "#181b23",
      "800": "#1f2029",
      "750": "#47585B",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "50": "#F5F8FA"
    },
    black:{
      "900": '#1D1D1D'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.750'
      }
    }
  }
})