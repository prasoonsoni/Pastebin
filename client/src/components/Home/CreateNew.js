import React, { useState } from 'react'
import { Button, useToast } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
const BASE_URL = process.env.REACT_APP_BASE_URL

const CreateNew = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const handleOnCreate = async () => {
        console.log(BASE_URL)
        setLoading(true)
        const response = await fetch(`${BASE_URL}/api/create`, {
            method: 'POST'
        })
        const data = await response.json()
        if (data.success) {
            toast({
                title: data.message,
                status: "success",
                duration: 2000,
                isClosable: true,
            })
            navigate(`/edit/${data.content._id}`)
        } else {
            toast({
                title: data.message,
                status: "error",
                duration: 2000,
                isClosable: true,
            })
        }
        setLoading(false)
        console.log(data)
    }
    return (
        <Button leftIcon={<AddIcon />} isLoading={loading} loadingText="Creating..." colorScheme="linkedin" w="300px" onClick={handleOnCreate}>Create</Button>
    )
}

export default CreateNew