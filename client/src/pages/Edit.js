import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, VStack, Text, useDisclosure } from '@chakra-ui/react'
import PasswordModal from '../components/Edit/PasswordModal'
import Navbar from '../components/Navbar'
import Form from '../components/Edit/Form'
const BASE_URL = process.env.REACT_APP_BASE_URL

const Edit = () => {
    const { id } = useParams()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [correct, setCorrect] = useState(false)
    useEffect(() => {
        onOpen()
    }, [id])
    return (
        <Box bg="#EEF2E6" h="100vh" align="center">
            <VStack h="full">
                <PasswordModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} id={id} setCorrect={setCorrect} />
                <Navbar/>
                <Form/>
            </VStack>
        </Box>
    )
}

export default Edit