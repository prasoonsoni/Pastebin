import React, { useState } from 'react'
import { Button, useToast, useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import PasswordModal from './PasswordModal'
const BASE_URL = process.env.REACT_APP_BASE_URL

const CreateNew = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleOnCreate = async () => {
        console.log(BASE_URL)
        setLoading(true)
        const response = await fetch(`${BASE_URL}/api/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        if (data.success) {
            toast({
                title: data.message,
                status: "success",
                duration: 2000,
            })
            navigate(`/edit/${data.content._id}`)
        } else {
            toast({
                title: data.message,
                status: "error",
                duration: 2000,
            })
        }
        setLoading(false)
        console.log(data)
    }
    return (
        <>
            <PasswordModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Button leftIcon={<AddIcon />} isLoading={loading} loadingText="Creating..." colorScheme="blue" w="300px" onClick={onOpen}>Create</Button>
        </>

    )
}

export default CreateNew