import { Button, Flex, Image, Spacer, Box, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
const BASE_URL = process.env.REACT_APP_BASE_URL
const Navbar = (props) => {
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const handleSave = async () => {
        setLoading(true)
        const response = await fetch(`${BASE_URL}/api/update/${props.id}`, {
            method: 'POST',
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
    }
    return (
        <>
            <Flex w="100%" minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Image src='/images/logo.png' alt='logo' height={70} />
                </Box>
                <Spacer />
                <Button isLoading={loading} loadingText="Saving..." onClick={handleSave} mr={50} colorScheme="blue" leftIcon={<CheckCircleIcon />} variant="solid">Save</Button>
            </Flex>
        </>
    )
}

export default Navbar