import { Input, VStack,Textarea } from '@chakra-ui/react'
import React from 'react'

const Form = () => {
    return (
        <VStack w="100%">
            <Input placeholder='Title Goes Here...' colorScheme="blue" w="95%"/>
            <Textarea placeholder='Description Goes Here...' w="95%" />
        </VStack>
    )
}

export default Form