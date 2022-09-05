import React, { useState } from 'react'
import { Button, useToast, useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import PasswordModal from './PasswordModal'

const CreateNew = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
            <PasswordModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Button leftIcon={<AddIcon />} isLoading={loading} loadingText="Creating..." colorScheme="blue" w="300px" onClick={onOpen}>Create</Button>
        </>

    )
}

export default CreateNew