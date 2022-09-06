import React, { useState } from 'react'
import { Input, Button, useToast } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const Existing = () => {
    const [id, setId] = useState('')
    const navigate = useNavigate()
    const toast = useToast()
    const handleOnClick = () => {   
        if(!id) {
            toast({
                description: 'Please enter an ID',
                status: 'error',
                duration: 2000,
            })
            return
        }
        navigate(`/${id}`)

    }
    return (
        <>
            <Input colorScheme="blue" placeholder="Enter Code Here..." w="300px" value={id} onChange={(e) => setId(e.target.value)} />
            <Button leftIcon={<ViewIcon />} colorScheme="blue" w="300px" onClick={handleOnClick}>View</Button>
        </>
    )
}

export default Existing