import React from 'react'

import {
    Box,
    Button,
    Container,
    Heading,
    Stack,
    Text,
    useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Hero';
import JamShalat from '../components/JamShalat';


function Home() {

    const hitam = "Tambah Pengetahuan &"
    const orange = "Wawasan Islami" 
    const deskripsi = "Semoga Dengan Hadirnya Website Ini Dapat Meningkatkan Pengetahuan dan Ibadah Kita Kepada Allah SWT"

    return (
        <div>
            <Jumbotron jamshalat={"#jamshalat"} hitam={hitam} orange={orange} deskripsi={deskripsi} tampilkan={true}/>
            <Box as="main" py={12} px={4}>
                <Container maxW={'7xl'} as={Stack} spacing={12}>
                    <div id='jamshalat'>
                    <JamShalat id="jamshalat" judul={"Waktu Shalat"} judul2={"Cari Lokasi Anda"}/>
                    </div>
                </Container>
            </Box>
        </div>
    )
}

export default Home
