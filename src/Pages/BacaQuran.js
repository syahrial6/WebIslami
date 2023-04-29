import React, { useEffect, useState } from 'react'
import {
    Grid,
    Box,
    Text,
    Switch,
    Flex,
    Stack,
    Spinner
} from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import tandaayat from "../images/ayat.png"

function BacaQuran() {
    const [loading, setLoading] = useState(true)
    const [surah, setSurah] = useState([])
    const { id } = useParams();
    const [terjemah,setTerjemah]= useState(false)
    console.log(surah)

    useEffect(() => {
        getsurah()
    }, [])

    const getsurah = async () => {
        try {
            const response = await axios.get(`https://api.quran.gading.dev/surah/${id}`)
            setSurah(Object.values(response.data.data))
            setLoading(false)
        } catch (error) {
            console.log(error.message)
        }
    }
    if (loading) {
        return (
            <Stack direction='row' spacing={4} p={"60"} align={"center"} justify={"center"}>
                    <Spinner size={"xl"} />
                    <Text>Loading....</Text>
                </Stack>)
    }
    return (
        <div>
            <Grid templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" }} p={5} gap={6}>

                <Box bgGradient="linear(to-l, orange.200, orange.300)" borderWidth="1px" borderRadius={"3xl"} overflow="hidden" boxShadow="lg">
                    <Box p="6">
                        <Box mt="1" color={"white"} textAlign={"center"} fontSize="60pt" as="h4" lineHeight="tight" fontFamily="A Thuluth">
                            {surah[3].short}
                        </Box>
                        <Text mt="2" color={"white"} textAlign={"center"} fontSize={{base:"20pt",md:"40pt"}} lineHeight="tight" fontFamily="Poppins">
                            {surah[3].translation.id}
                        </Text>
                        <Text mt="2" color={"white"} textAlign={"center"} fontSize={{base:"20pt",md:"40pt"}} fontFamily="Poppins">
                            {`Surah Ke ${surah[0]} | ${surah[2]} Ayat` }
                        </Text>
                        {id===1 ? null :<Text mt="2" color={"white"} textAlign={"center"} fontSize={{base:"40pt",md:"40pt"}} lineHeight="tight" fontFamily="Traditional Arabic" >
                            {surah[6].text.arab}
                        </Text>}
                        
                    </Box>
                </Box>
                <Flex display={"flex"} justifyContent={"center"}>
                <Text fontSize={"15pt"} px={2}>Terjemahan</Text>
                <Switch colorScheme='orange' size='lg' isChecked={terjemah} onChange={(e)=> setTerjemah(!terjemah)} textAlign={"center"} />
                </Flex>
                {surah[7].map((data) => (
                    <Box bgGradient="linear(to-t, orange.100, orange.50)" borderWidth="1px" borderRadius={"3xl"} overflow="hidden" boxShadow="lg">
                        <Box p="6">
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent={"flex-end"}
                            >
                                <Box ml="1" width="40pt" height="auto" position="relative">
                                    <img src={tandaayat} style={{ fontSize: "40pt", width: "100%", height: "auto" }} />
                                    <Text
                                        fontWeight={"semibold"}
                                        position="absolute"
                                        top="50%"
                                        left="50%"
                                        transform="translate(-50%, -50%)"
                                        fontSize={{ base: "12px", md: "16px" }}
                                    >
                                        {data.number.inSurah}
                                    </Text>
                                </Box>
                                <Box
                                    mt="1"
                                    textAlign="right"
                                    fontSize={{ base: "40px", md: "40pt" }}
                                    as="h4"
                                    lineHeight="taller"
                                    fontFamily="Traditional Arabic"
                                >
                                    {data.text.arab}
                                </Box>
                            </Box>
                            {terjemah && (
                            <Text mt="2" textAlign={"right"} fontSize={{base:"10pt",md:"20pt"}} lineHeight="taller" fontFamily="Poppins" >
                                {data.translation.id}
                            </Text>
                            )}
                        </Box>
                    </Box>
                ))}


            </Grid>
        </div>
    )
}

export default BacaQuran
