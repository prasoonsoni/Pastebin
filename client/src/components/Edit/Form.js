import { Input, VStack, Textarea, useToast, HStack, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CheckCircleIcon, CopyIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
const BASE_URL = process.env.REACT_APP_BASE_URL
const URL = process.env.REACT_APP_URL
const Form = (props) => {
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
        <VStack w="100%" align="left" p="20px" pt={0}>
            <Input placeholder='Title Goes Here...' colorScheme="blue" value={props.title} onChange={(e) => props.setTitle(e.target.value)} />
            <Textarea placeholder='Description Goes Here...' h="70vh" value={props.description} onChange={(e) => props.setDescription(e.target.value)} />
            <HStack align="left">
                <Button display={{ base: "inherit", md: "none" }} isLoading={loading} loadingText="Saving..." onClick={handleSave} colorScheme="blue" leftIcon={<CheckCircleIcon />} variant="solid" value="Save">Save</Button>
                <Button display={{ base: "inherit", md: "none" }} onClick={handleCopy} mr={5} colorScheme="blue" leftIcon={<CopyIcon />} variant="solid">Copy Link</Button>
            </HStack>
        </VStack>
    )
}

export default Form