import React from 'react'
import { Button,  useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import PasswordModal from './PasswordModal'

const CreateNew = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
            <PasswordModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Button leftIcon={<AddIcon />} colorScheme="blue" w="300px" onClick={onOpen}>Create</Button>
        </>

    )
}

export default CreateNew