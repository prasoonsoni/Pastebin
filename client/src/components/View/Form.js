import { Input, VStack, Textarea, useToast, HStack, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EditIcon, CopyIcon } from '@chakra-ui/icons'
const BASE_URL = process.env.REACT_APP_BASE_URL
const URL = process.env.REACT_APP_URL

const Form = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const toast = useToast()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const handleEdit = () => {
        setLoading(true)
        navigate(`/edit/${props.id}`)
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
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${BASE_URL}/api/get/${props.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
            const data = await response.json()
            if (data.success) {
                toast({
                    title: "Document Fetched Successfully",
                    status: "success",
                    duration: 2000,
                })
                setTitle(data.content.title)
                setDescription(data.content.description)
            } else {
                toast({
                    title: data.message,
                    status: "error",
                    duration: 2000,
                })
            }

        }
        fetchData()
    }, [])

    return (
        <VStack w="100%" align="left" p="20px" pt={0}>
            <Input placeholder='Title Goes Here...' colorScheme="blue" value={title} readOnly />
            <Textarea placeholder='Description Goes Here...' h="70vh" value={description} readOnly />
            <HStack align="left">
                <Button display={{ base: "inherit", md: "none" }} isLoading={loading} loadingText="Loading..." onClick={handleEdit} colorScheme="blue" leftIcon={<EditIcon />} variant="solid">Edit</Button>
                <Button display={{ base: "inherit", md: "none" }} onClick={handleCopy} mr={5} colorScheme="blue" leftIcon={<CopyIcon />} variant="solid">Copy Link</Button>
            </HStack>
        </VStack>
    )
}

export default Form