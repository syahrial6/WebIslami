import { Box, Text,Flex } from "@chakra-ui/react";
import tandaayat from "../images/ayat.png"; // import gambar

function QuranPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="#f5f5dc"
    >
      <Box
        width="50%"
        height="90%"
        bg="#fff"
        border="1px solid #000"
        borderRadius="10px"
        boxShadow="0px 0px 5px 1px #000"
        overflow="hidden"
        textAlign="right"
      >
        <Box
          height="10%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#000"
        >
          <Text fontSize="3xl" color="#fff">
            Al-Quran
          </Text>
        </Box>
        <Box height="80%" p="20px" lineHeight="2" whiteSpace="pre-wrap">
            <Flex display="flex" justifyContent={"flex-end"}>
          <Text fontSize="20pt" position="relative">
            <img
              src={tandaayat}
              style={{
                width: "1em",
                height: "1em",
              }}
              alt=""
            />
            Bismillah
          </Text>
          <Text fontSize="20pt">الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</Text>
          </Flex>
        </Box>
        <Box height="10%" display="flex" alignItems="center" p="10px">
          <Text fontSize="sm">Surah Al-Fatihah, Ayat 1-7</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default QuranPage;
