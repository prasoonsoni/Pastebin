import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import CreateNew from '../components/Home/CreateNew'
import Existing from '../components/Home/Existing'
import Logo from '../components/Logo'

const Home = () => {
    return (
        <Box bg="#EEF2E6" minHeight="100vh" align="center">
            <VStack h="full" pt="20vh">
                <Logo />
                <Existing />
                <CreateNew />
            </VStack>
            <Footer/>
        </Box>
    )
}

export default Home