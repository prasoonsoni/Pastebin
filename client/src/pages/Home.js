import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import CreateNew from '../components/Home/CreateNew'
import Existing from '../components/Home/Existing'
import Logo from '../components/Logo'

const Home = () => {
    return (
        <Box bg="#EEF2E6" h="100vh" align="center">
            <VStack h="full">
                <Logo />
                <Existing />
                <CreateNew />
            </VStack>
        </Box>
    )
}

export default Home