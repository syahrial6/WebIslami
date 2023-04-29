import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Grid,
  Flex

} from '@chakra-ui/react';
import { FaBookOpen, FaClock, FaNewspaper, FaQuran } from "react-icons/fa"
import { Link } from 'react-router-dom';
export default function Jumbotron(props) {
  return (
    <Container maxW={'xl'} bg={"cyan.50"}>
      <Text fontSize={"20pt"} fontWeight={"bold"}>Selamat Datang Islam Zone</Text>
      <Text fontSize={"20pt"}>Tambah Wawasan Keislaman</Text>
      <Grid templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" }} p={5} gap={6}>

        <Box bgGradient="linear(to-l, cyan.600, cyan.400)" borderWidth="1px" borderRadius={"xl"} overflow="hidden" boxShadow="lg">
          <Link to={"/quran"}>
          <Box p="6">
            <Flex display={"flex"} justifyContent={"space-between"}>
              <Box mt="1" color={"white"} textAlign={"center"} fontSize="20pt" as="h4" lineHeight="tight" fontFamily="Poppins">
                Baca Al-Qur'an
              </Box>
              <FaQuran color='FFF1DC' size={50} />
            </Flex>
          </Box>
          </Link>
        </Box>
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }} p={5} gap={6}>
          <Box bgGradient="linear(to-l, purple.100, purple.200)" borderWidth="1px" borderRadius={"xl"} overflow="hidden" boxShadow="lg">
            <Box p="6" display="flex" justifyContent="center" alignItems="center">
              <a href={props.jamshalat}>
              <Box>
                <FaClock color="#44337a" size={50} style={{ margin: '0 auto' }} />
                <Box
                  mt="1"
                  color={'purple.800'}
                  textAlign="center"
                  fontSize="15pt"
                  lineHeight="tight"
                >
                  
                  Waktu Shalat
              
                </Box>
              </Box>
              </a>
            </Box>
          </Box>
          <Box bgGradient="linear(to-t, cyan.400, cyan.200)" borderWidth="1px" borderRadius={"xl"} overflow="hidden" boxShadow="lg">
            <Box p="6" display="flex" justifyContent="center" alignItems="center">
              <Box>
                <FaBookOpen color="#045a6b" size={50} style={{ margin: '0 auto' }} />
                <Box
                  mt="1"
                  color="cyan.800"
                  textAlign="center"
                  fontSize="15pt"
                  lineHeight="tight"
                >
                Al-Ma'Tsurat
                  Coming Soon
                </Box>
              </Box>
            </Box>
          </Box>
          <Box bgGradient="linear(to-t, orange.700, orange.300)" borderWidth="1px" borderRadius={"3xl"} overflow="hidden" boxShadow="lg">
            <Box p="6" display="flex" justifyContent="center" alignItems="center">
              <Box>
                <FaNewspaper color="#ffffff" size={50} style={{ margin: '0 auto' }} />
                <Box
                  mt="1"
                  color="white"
                  textAlign="center"
                  fontSize="15pt"
                  lineHeight="tight"
                >
                  Doa Harian
                  Coming Soon
                </Box>
              </Box>
            </Box>
          </Box>
          <Box bgGradient="linear(to-t, orange.700, orange.300)" borderWidth="1px" borderRadius={"3xl"} overflow="hidden" boxShadow="lg">
            <Box p="6" display="flex" justifyContent="center" alignItems="center">
              <Box>
                <FaNewspaper color="#ffffff" size={50} style={{ margin: '0 auto' }} />
                <Box
                  mt="1"
                  color="white"
                  textAlign="center"
                  fontSize="15pt"
                  lineHeight="tight"
                >
                  Hadits
                  Coming Soon
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}