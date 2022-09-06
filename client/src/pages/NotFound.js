import React from 'react'
import { Box, Center, Text, VStack } from '@chakra-ui/react'
import Lottie from 'react-lottie';
import * as animationData from '../assets/notfound.json'

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Box bg="#EEF2E6" h="100vh" align="center" justifyContent="center">
      <Center h="full">
        <VStack>
          <Lottie options={defaultOptions}
            height={300}
            width={300} />
          <Text fontWeight="bold">404 Not Found</Text>
        </VStack>
      </Center>
    </Box>
  )
}

export default NotFound