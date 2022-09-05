import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, VStack, Text, useDisclosure } from '@chakra-ui/react'
import PasswordModal from '../components/Edit/PasswordModal'
import Navbar from '../components/Navbar'
import Form from '../components/Edit/Form'

const Edit = () => {
    const { id } = useParams()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [correct, setCorrect] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    useEffect(() => {
        onOpen()
    }, [id])
    
    return (
        <Box bg="#EEF2E6" minHeight="100vh" align="center">
            <VStack h="full">
                <PasswordModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} id={id} setCorrect={setCorrect} setTitle={setTitle} setDescription={setDescription} />
                {correct && <>
                    <Navbar id={id} title={title} description={description} />
                    <Form title={title} description={description} setTitle={setTitle} setDescription={setDescription} />
                </>}
            </VStack>
        </Box>
    )
}

export default Edit