import React, { useState, useRef } from 'react'
import { InputGroup, InputRightElement, useDisclosure, Button, Input, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const PasswordModal = (props) => {
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [show, setShow] = useState(false)
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
                                <Input placeholder='Enter Password Here' type={show ? 'text' : 'password'} />
                                <InputRightElement width='4.5rem'>
                                    <Button h='2rem' w='2rem' size='md' onClick={() => { setShow(!show) }}>
                                        {!show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
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