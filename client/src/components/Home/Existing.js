import React from 'react'
import { Input, Button } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'

const Existing = () => {
    return (
        <>
            <Input colorScheme="linkedin" placeholder="Enter Code Here..." w="300px" />
            <Button leftIcon={<ViewIcon />} colorScheme="linkedin" w="300px">View</Button>
        </>
    )
}

export default Existing