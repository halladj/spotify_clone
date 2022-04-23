import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const GradientLayout= ({color, children, image, subtitile, title, description, roundImage})=>{
  return(<Box 
    height="100%" 
    overflowY="auto" 
    bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}>
    <Flex bg={`${color}.600`} padding="40px" align="end">
      <Box padding="20px" >
        <Image boxSize="160px" 
        boxShadow="xs" src={image} 
        borderRadius={ roundImage? "100%" : "0%" }/>
      </Box>
      <Box padding="20px" lineHeight="40px" color="white">
        <Text fontSize="sm" fontWeight="bold" casing="uppercase">
          {subtitile}
        </Text>
        <Text fontSize="6xl">{title}</Text>
        <Text fontSize="xs" >{description}</Text>
      </Box>
    </Flex>
  </Box>);
}

export default GradientLayout;

