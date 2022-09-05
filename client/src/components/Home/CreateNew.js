import React from 'react'
import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

const CreateNew = () => {
    return (
        <Button leftIcon={<AddIcon />} colorScheme="linkedin" w="300px">Create</Button>
    )
}

export default CreateNew