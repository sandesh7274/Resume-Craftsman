import React from 'react';
import { Flex, Heading, Spacer, HStack, Button } from "@chakra-ui/react";

const Navbar = () => {
  const githubLink = 'https://github.com/sandesh7274';

  return (
    <Flex
      w='full'
      alignItems={'center'}
      p={5}
      bg={'gray.50'}
      as='header'
    >
      <Heading as='h3' ml={{ base: 0, sm: 8 }} size='lg' fontWeight={'thin'} color='purple.500' style={{ fontFamily: "Pacifico" }}>
        Resumegen
      </Heading>
      <Spacer></Spacer>
      <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' style={{ fontFamily: 'Poppins' }}>
        {/* Use anchor tag to create a link to GitHub */}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Button colorScheme={'purple'} fontWeight={'medium'}>
            About
          </Button>
        </a>
      </HStack>
    </Flex>
  );
}

export default Navbar;
