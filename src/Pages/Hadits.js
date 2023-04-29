import React, { useEffect, useState } from 'react'
import { Box, Heading, Text, VStack, Grid, Badge } from '@chakra-ui/react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import axios from 'axios';

function Hadits() {
  const [hadits, setHadits] = useState([]);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState("")
  useEffect(() => {
    if (query === "") {
      getHadits()
    }
  }, [query])

  useEffect(() => {
    if (query !== '') {
      getHaditstunggal();
    }
  }, [query])

  const getHadits = async () => {
    const response = await axios.get(`https://hadis-api-id.vercel.app/hadith/abu-dawud?page=1&limit=20`)
    setHadits(response.data.items)
    setTotal(response.data.total)
    console.log(response.data)
  }

  const getHaditstunggal = async () => {
    const response = await axios.get(`https://hadis-api-id.vercel.app/hadith/abu-dawud/${query}?page=1&limit=20`)
    setHadits([{ number: response.data.number, id: response.data.id, arab: response.data.arab }])

  }

  return (
    <div>
      <InputGroup>
      <label>Cari Hadits</label>
        <InputLeftElement pointerEvents="none" />
        <Input placeholder="Cari Hadits"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>
      {query >= 5000 ? (
        <div>
          <h1>Data Tidak Ditemukan</h1>
          <h1>Total Hadits Abu Dawud 4419</h1>
        </div>
      ) : (
        <Grid templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" }} gap={6}>
          {hadits.map((data) => (
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg">
              <Box p="6">
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  {data.number}
                </Box>
                <Text mt="2" fontSize="30pt" lineHeight="taller" fontFamily="Adobe Naskh Medium" >
                  {data.arab}
                </Text>
                <Text mt="2" fontSize="15pt" fontFamily="Adobe Naskh Medium" >
                  {data.id}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>
      )}

    </div>
  )
}


export default Hadits
