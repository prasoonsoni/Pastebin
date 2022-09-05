import React, { useState, useRef } from 'react'
import { InputGroup, InputRightElement, useToast, Button, Input, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
const BASE_URL = process.env.REACT_APP_BASE_URL

const PasswordModal = (props) => {
    const toast = useToast()
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')

    const handleOnCancel = () => {
        navigate('/')
    }

    const handleOnContinue = async () => {
        if (password.length === 0) {
            toast({
                title: "Password is required",
                status: "error",
                duration: 2000,
            })
            return
        }
        setLoading(true)
        const response = await fetch(`${BASE_URL}/api/get/${props.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password
            })
        })
        const data = await response.json()
        if (data.success) {
            toast({
                title: "You Can Edit Now",
                status: "success",
                duration: 2000,
            })
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
            <Modal
                closeOnOverlayClick={false}
                isOpen={props.isOpen}
                onClose={props.onClose}
                isCentered>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(5px)'
                />
                <ModalContent>
                    <ModalHeader>Enter Password to Continue</ModalHeader>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input placeholder='Enter Password Here' type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                                <InputRightElement width='4.5rem'>
                                    <Button h='2rem' w='2rem' size='md' onClick={() => { setShow(!show) }}>
                                        {!show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleOnContinue} isLoading={loading} loadingText="Checking...">
                            Continue
                        </Button>
                        <Button onClick={handleOnCancel}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PasswordModal