import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, VStack } from '@chakra-ui/react'
import Navbar from '../components/View/Navbar'

const View = () => {
    const { id } = useParams()

    return (
        <Box bg="#EEF2E6" minHeight="100vh" align="center">
            <VStack h="full">
                <Navbar id={id} />
            </VStack>
        </Box>
    )
}

export default View