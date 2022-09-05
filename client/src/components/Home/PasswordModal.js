import React, { useState, useRef } from 'react'
import { InputGroup, InputRightElement, useToast, Button, Input, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
const BASE_URL = process.env.REACT_APP_BASE_URL
const PasswordModal = (props) => {
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const toast = useToast()
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')

    const handleOnCreate = async () => {
        if (password.length === 0) {
            toast({
                title: "Password is required",
                status: "error",
                duration: 2000,
            })
            return
        }
        console.log(BASE_URL)

        setLoading(true)
        const response = await fetch(`${BASE_URL}/api/create`, {
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
                title: data.message,
                status: "success",
                duration: 2000,
            })
            // navigate(`/edit/${data.content._id}`)
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
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={props.isOpen}
                onClose={props.onClose}
                isCentered>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(5px)'
                />
                <ModalContent>
                    <ModalHeader>Set Password For Editing</ModalHeader>
                    <ModalCloseButton />
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
                        <Button colorScheme='blue' mr={3} onClick={handleOnCreate} isLoading={loading} loadingText="Saving...">
                            Save
                        </Button>
                        <Button onClick={props.onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PasswordModal