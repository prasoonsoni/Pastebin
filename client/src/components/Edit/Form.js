import { Input, VStack, Textarea } from '@chakra-ui/react'
import React from 'react'

const Form = (props) => {
    return (
        <VStack w="100%">
            <Input placeholder='Title Goes Here...' colorScheme="blue" w="95%" value={props.title} onChange={(e) => props.setTitle(e.target.value)} />
            <Textarea placeholder='Description Goes Here...' w="95%" h="80vh" value={props.description} onChange={(e) => props.setDescription(e.target.value)} />
        </VStack>
    )
}

export default Form