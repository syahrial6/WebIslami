import Select from 'react-select'
import axios from 'axios';
import moment from 'moment';



import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
    Spinner,
    Alert,
    AlertTitle,
    AlertDescription,
    AlertIcon
} from '@chakra-ui/react';
import {
    FcClock
} from 'react-icons/fc';
import { useEffect, useState } from 'react';






export default function JamShalat() {


    const [kota, setKota] = useState([]);
    const [query, setQuery] = useState(837)
    const [waktu, setWaktu] = useState([])
    const [tanggal, setTanggal] = useState(moment().format("YYYY-MM-DD"))
    const [loading, setLoading] = useState(true)
    const [message,setMessage] = useState("")
    console.log(query)


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
        try {
            setLoading(true)
            const response = await axios.get(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${query}/tanggal/${tanggal}`)
            setWaktu(response.data.jadwal.data)
            console.log(response.data)
            setLoading(false)
            setMessage(true)
        } catch (error) {
            console.log(error.message)
            setLoading(false)
            setMessage(false)

        }

    }

    return (

        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Waktu Shalat
                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                    Cari Lokasi Anda
                </Text>
                
                
                <Select className='mb-4'
                    defaultValue={{ label: "KOTA PONTIANAK", value:  query  }}
                    options={kota}
                    placeholder="Masukkan Wilayah"
                    onChange={(e) => setQuery(parseInt(e.value))}
                />
            </Stack>

            {loading ?
             <Box p={4}>
                <Stack direction='row' spacing={4} align={"center"} justify={"center"}>
                    <Spinner size={"xl"} />
                    <Text>Loading....</Text>
                </Stack>
            </Box> : <Container maxW={'5xl'} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    {Object.keys(waktu).map((key, index) => (
                        key === "terbit" ? null :
                            <Card key={key}
                                heading={key.toUpperCase()}
                                icon={<Icon as={FcClock} w={10} h={10} />}
                                description={waktu[key]}
                                href={'#'}
                            />

                    ))}


                </Flex>
            </Container> }

            
        </Box>
    );
}

const Card = ({ heading, description, icon, href }) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            align={'center'}
            overflow="hidden"
            p={5}>
            <Stack align={'start'} justifyContent="center" alignItems="center" spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.300', 'gray.700')}>
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{heading}</Heading>
                    <Text mt={1} fontSize={'xl'} fontWeight={"bold"}>
                        {description}
                    </Text>
                </Box>
            </Stack>
        </Box>
    );
};