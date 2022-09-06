import { Button, Flex, Image, Spacer, Box, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CheckCircleIcon, CopyIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
const BASE_URL = process.env.REACT_APP_BASE_URL
const URL = process.env.REACT_APP_URL
const Navbar = (props) => {
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()
    const handleSave = async () => {
        setLoading(true)
        const response = await fetch(`${BASE_URL}/api/update/${props.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: props.title,
                description: props.description
            })
        })
        const data = await response.json()
        if (data.success) {
            toast({
                title: "Saved Successfully",
                status: "success",
                duration: 2000,
            })
        } else {
            toast({
                title: data.message,
                status: "error",
                duration: 2000,
            })
        }
        setLoading(false)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(`${URL}/${props.id}`)
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
                <Button display={{ base: "none", md: "inherit" }} isLoading={loading} loadingText="Saving..." onClick={handleSave} colorScheme="blue" leftIcon={<CheckCircleIcon />} variant="solid" value={{ base: "", md: "Save" }}>Save</Button>
                <Button display={{ base: "none", md: "inherit" }} onClick={handleCopy} mr={5} colorScheme="blue" leftIcon={<CopyIcon />} variant="solid">Copy Link</Button>
            </Flex>
        </>
    )
}

export default Navbar