import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import Logo from '../components/Logo'

const Home = () => {
    return (
        <Box bg="#EEF2E6" h="100vh" align="center">
            <VStack>
                <Logo />
            </VStack>
        </Box>
    )
}

export default Home