import { Button, Flex, Image, Spacer, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { EditIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
const Navbar = (props) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleEdit = async () => {
        setLoading(true)
        navigate(`/edit/${props.id}`)
        setLoading(false)
    }
    return (
        <>
            <Flex w="100%" minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Image src='/images/logo.png' alt='logo' height={70} onClick={() => navigate('/')} _hover={{ cursor: "pointer" }} />
                </Box>
                <Spacer />
                <Button display={{ base: "none", md: "inherit" }} isLoading={loading} loadingText="Loading..." onClick={handleEdit} mr={50} colorScheme="blue" leftIcon={<EditIcon />} variant="solid">Edit</Button>
            </Flex>
        </>
    )
}

export default Navbar