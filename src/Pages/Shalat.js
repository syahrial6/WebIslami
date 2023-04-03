import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Select from 'react-select'
import axios from 'axios';
import Moment from 'react-moment';
import moment from 'moment';
import ClipLoader from "react-spinners/ClipLoader";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";


function Shalat() {
    const [kota, setKota] = useState([]);
    const [query, setQuery] = useState(680)
    const [waktu, setWaktu] = useState([])
    const [tanggal, setTanggal] = useState(moment().format("YYYY-MM-DD"))
    const [loading, setLoading] = useState(true)
    const { colorMode, toggleColorMode } = useColorMode();


    useEffect(() => {
        getWaktu()
        getKota()


    }, [query])

    const getKota = async () => {
        const response = await axios.get("https://api.banghasan.com/sholat/format/json/kota")
        const result = response.data.kota.map(data => {
            return {
                value: data.id,
                label: data.nama
            }
        })
        setKota(result)
    }

    const getWaktu = async () => {
        const response = await axios.get(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${query}/tanggal/${tanggal}`)
        setWaktu(response.data.jadwal.data)
        setLoading(false)
    }

    if (loading) {
        return (
            <Container>
                <Row className="justify-content-center align-item-center">

                    <ClipLoader
                        className='mt-5'
                        color="#36d7b7"
                        loading={loading}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    <h3 className='text-center'>Loading....</h3>

                </Row>
            </Container>

        )
    }
    return (
        <div className="App">
            <Box p="4" >
                <h1 className="text-center my-5">Jadwal Shalat</h1>
                <Select className='mb-4'
                    defaultValue={{ label: "Bandung Barat", value: { query } }}
                    options={kota}
                    placeholder="Masukkan Wilayah"
                    onChange={(e) => setQuery(parseInt(e.value))}
                />
                <Flex
                    flexDirection={{ base: "column", md: "row" }}
                >
                    {Object.keys(waktu).map((key, index) => (
                        <Box
                            key={key}
                            flex="1"
                            textAlign="center"
                            borderLeftWidth={index > 0 ? "1px" : "0"}
                            mt={{ base: index > 0 ? "4" : "0", md: "0" }}
                        >
                            <Text fontSize="sm" fontWeight="bold">{key}</Text>
                            <Text fontSize="lg" fontWeight="bold" mt="1">
                                {waktu[key]}
                            </Text>
                        </Box>
                    ))}
                </Flex>

            </Box>
        </div>
    );
}

export default Shalat;
