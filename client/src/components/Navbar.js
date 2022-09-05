import { Button, Flex, Image, Spacer,Box } from '@chakra-ui/react'
import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
const Navbar = () => {
    return (
        <>
            <Flex w="100%"minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Image src='/images/logo.png' alt='logo' height={70} />
                </Box>
                <Spacer />
                <Button mr={50} colorScheme="blue" leftIcon={<CheckCircleIcon />} variant="solid">Save</Button>
            </Flex>
        </>
    )
}

export default Navbar