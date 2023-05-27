import { Box, Center, HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box pos="fixed" bottom="0" h="40px" w="100%" bg="">
      <Center h="100%">
        <HStack>
          <Text fontSize="md">Made with ❤️ by <Link href='https://prasoonsoni.com' isExternal color="blue.500">Prasoon Soni</Link></Text> 
          <Text> | </Text>
          <Link href='https://github.com/prasoonsoni/Pastebin' isExternal color="blue.500">Github</Link>
        </HStack>
        
      </Center>

    </Box>
  )
}

export default Footer