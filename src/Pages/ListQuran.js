import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Select,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Hero';
import ayat from "../images/ayat.png"
import { Link } from 'react-router-dom';



export default function ListQuran() {
  const [listsurah, setListsurah] = useState([]);
  console.log(listsurah.number)


  useEffect(() => {
    getsurah()
  }, [])


  const getsurah = async () => {
    const response = await axios.get("https://api.quran.gading.dev/surah")
    setListsurah(response.data.data)
  }
  return (
    <Box bg={"orange.50"}>
      <Box>
        <Container maxW={'8xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            {listsurah.map((data) => (
              <Card
                heading={data.name.transliteration.id}
                img={ayat}
                nomor={data.number}
                description={
                  data.revelation.id
                }
                ayat={data.numberOfVerses}
              />
            ))}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

const Card = ({ heading, description, img, ayat, nomor }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"

      p={5}>
      <Stack direction={"row"}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          fontWeight={"bold"}
          fontSize={"20px"}
          rounded={'full'}
          position={'relative'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          <img src={img} style={{ maxWidth: '100%', height: 'auto' }} />
          <Box
            position={'absolute'}
            top={'50%'}
            left={'50%'}
            transform={'translate(-50%, -50%)'}
            fontWeight={'bold'}
            fontSize={'20px'}
          >
            {nomor}
          </Box>
        </Flex>
        <Box mt={2}>
          <Button bg={"orange.300"}
          borderRadius={"20px"}>
            <Link to={`/quran/${nomor}`}>
          <Heading size="md" color={"white"}>{heading}</Heading>
          </Link>
          </Button>
          <Text mt={1} fontSize={'sm'}>
            {description}| |{`${ayat} Ayat`}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};