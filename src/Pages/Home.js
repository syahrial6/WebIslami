import React from 'react'

import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    IconButton,
    Stack,
    Text,
    useColorMode,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Artikel from './Artikel';
import Shalat from './Shalat';
import { Link } from 'react-router-dom';

function Home() {
    const cards = [
        {
            image: '#',
            title: 'Card 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: '#',
            title: 'Card 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: '#',
            title: 'Card 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];
    

    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding={6}
                bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
                color={colorMode === 'light' ? 'black' : 'white'}
                
            >
                <Box display="flex" alignItems="center">
                    <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
                        Islamic Website
                    </Heading>
                </Box>

                <Box display="flex" alignItems="center">
                    <Stack direction="row" spacing={4} align="center">
                        <Button
                            variant="ghost"
                            colorScheme={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}
                        ><a href='#jam_shalat'>
                                Jam Shalat
                            </a>
                        </Button>

                        <Button
                            variant="ghost"
                            colorScheme={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}
                        >
                            Artikel Islami
                        </Button>
                        <Button
                            variant="ghost"
                            colorScheme={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}
                            href="#hadits"
                        ><a href='#hadits'>
                            Kumpulan Hadits
                            </a>
                        </Button>
                        <IconButton
                            aria-label="Toggle dark mode"
                            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                            onClick={toggleColorMode}
                            variant="ghost"
                            size="md"
                        />
                    </Stack>
                </Box>
            </Flex>
            <Box
                bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
                color={colorMode === 'light' ? 'black' : 'white'}
            >
                <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Islamic Website</Heading>
                        <Text fontSize={'lg'} maxW={'3xl'}>
                            Mempelajari dan Mengenal Islam
                        </Text>
                    </Stack>
                </Container>
            </Box>
            {/* Batas Hero */}
            <Box as="main" py={12} px={4}>
                <Container maxW={'7xl'} as={Stack} spacing={12}>
                    <Box>
                        <Heading as="h2" size="md" mb={4}>
                            Jam Shalat
                        </Heading>
                        <Text>
                            Tampilkan waktu shalat di wilayah Anda dengan akurat dan tepat
                            waktu.
                        </Text>
                        <Shalat id="jam_shalat" />
                    </Box>



                    <Box id="hadits">
                        <Heading as="h2" size="md" mb={4}>
                            <Link to={"/hadits"}><Button size="sm" colorScheme="yellow" mt={4}>
                                Kumpulan Hadits
                            </Button>
                            </Link>

                        </Heading>
                        <Text fontSize="20pt">
                            (Untuk Saat Ini Baru Hadits AbuDawud,InsyAllah akan ditambah lagi)
                        </Text>
                    </Box>
                    <Box>
                        <Heading as="h2" size="md" mb={4}>
                            Artikel Islami (Untuk Artikel Belum Ada)
                        </Heading>
                        <Artikel cards={cards} />
                        <Text>
                            Dapatkan pengetahuan dan pemahaman yang lebih mendalam tentang Islam
                        </Text>
                    </Box>
                </Container>
            </Box>
            <Box
                as="footer"
                role="contentinfo"
                mx="auto"
                maxW="7xl"
                py="12"
                px={{ base: '4', md: '8' }}
                bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
                color={colorMode === 'light' ? 'black' : 'white'}
            >
                <Stack>
                    <Text fontSize="sm" textAlign="center">
                        © {new Date().getFullYear()} Islamic Website. All rights
                        reserved.
                    </Text>
                    <Stack direction="row" spacing={6} justify="center">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Use</Link>
                    </Stack>
                </Stack>
            </Box>
        </div>
    )
}

export default Home
