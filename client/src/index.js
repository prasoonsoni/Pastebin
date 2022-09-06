import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  fonts: {
    heading: "Nunito",
    body: "Montserrat Alternates"
  }
})

root.render(
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
);