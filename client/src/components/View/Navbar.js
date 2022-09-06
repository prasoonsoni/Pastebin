import { Button, Flex, Image, Spacer, Box, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { EditIcon, CopyIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
const BASE_URL = process.env.REACT_APP_URL
const Navbar = (props) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const toast = useToast()
    const handleEdit = () => {
        setLoading(true)
        navigate(`/edit/${props.id}`)
        setLoading(false)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(`${BASE_URL}/${props.id}`)
        toast({
            title: "Link Copied",
            status: "success",
            duration: 2000,
        })
    }
    return (
        <>
            <Flex w="100%" minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Image src='/images/logo.png' alt='logo' height={70} onClick={() => navigate('/')} _hover={{ cursor: "pointer" }} />
                </Box>
                <Spacer />
                <Button display={{ base: "none", md: "inherit" }} isLoading={loading} loadingText="Loading..." onClick={handleEdit} colorScheme="blue" leftIcon={<EditIcon />} variant="solid">Edit</Button>
                <Button display={{ base: "none", md: "inherit" }} onClick={handleCopy} mr={5} colorScheme="blue" leftIcon={<CopyIcon />} variant="solid">Copy Link</Button>
            </Flex>
        </>
    )
}

export default Navbar