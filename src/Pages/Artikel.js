import { useState } from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const Artikel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentCardIndex(
      currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentCardIndex(
      currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1
    );
  };

  return (
//     <Box position="relative">
//       {cards.map((card, index) => (
//         <Box
//           key={index}
//           display={index === currentCardIndex ? 'block' : 'none'}
//           position="relative"
//         >
//           <Image
//             src={card.image}
//             alt={`Card Image ${index}`}
//             objectFit="cover"
//             h="300px"
//             w="100%"
//           />
//           <Box
//             position="absolute"
//             bottom="0"
//             left="0"
//             w="100%"
//             bg="rgba(0, 0, 0, 0.5)"
//             p={4}
//           >
//             <Text fontSize="xl" fontWeight="bold" color="white">
//               {card.title}
//             </Text>
//             <Text fontSize="md" color="white" mt={2}>
//               {card.description}
//             </Text>
//             <Button size="sm" colorScheme="yellow" mt={4}>
//               Lihat Detail
//             </Button>
//           </Box>
//         </Box>
//       ))}
//       <Box
//         position="absolute"
//         top="50%"
//         transform="translateY(-50%)"
//         left="20px"
//         zIndex="2"
//       >
//         <Button onClick={handlePrevClick} colorScheme="yellow">
//           &#8249;
//         </Button>
//       </Box>
//       <Box
//         position="absolute"
//         top="50%"
//         transform="translateY(-50%)"
//         right="20px"
//         zIndex="2"
//       >
//         <Button onClick={handleNextClick} colorScheme="yellow">
//           &#8250;
//         </Button>
//       </Box>
//     </Box>
  );
};

export default Artikel;
