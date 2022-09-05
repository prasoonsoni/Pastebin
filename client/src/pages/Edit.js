import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, VStack, Text, useDisclosure } from '@chakra-ui/react'
import PasswordModal from '../components/Edit/PasswordModal'
const BASE_URL = process.env.REACT_APP_BASE_URL

const Edit = () => {
    const { id } = useParams()
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        onOpen()
    }, [id])
    return (
        <Box bg="#EEF2E6" h="100vh" align="center">
            <VStack h="full">
            <PasswordModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                <Text></Text>
            </VStack>
        </Box>
    )
}

export default Edit