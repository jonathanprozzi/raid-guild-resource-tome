import {
  Box,
  Flex,
  Heading,
  Text,
  Tag,
  Badge,
  AspectRatio,
  Link as ChakraLink,
} from "@chakra-ui/react";

interface Resource {
  title: string;
  url: string;
  conference: string;
  year: string;
  category: string;
}

const ResourceCard = ({ title, url, conference, year, category }: Resource) => (
  <Flex
    padding={6}
    direction='column'
    alignItems='center'
    justifyContent='flex-start'
    borderRadius='lg'
    background='gray.900'
    minWidth={{ base: "80vw", md: "0" }}
    minHeight={{ base: "0", md: "300px" }}
  >
    <Flex
      direction='column'
      justifyContent='flex-start'
      marginTop='2'
      minHeight={{ base: "300px", md: "300px" }}
    >
      <ChakraLink
        href={url}
        isExternal
        _hover={{
          textDecoration: "none",
        }}
      >
        <Heading
          as='h2'
          bgGradient='linear-gradient(94.89deg, #FF5A00 0%, #D62789 70.2%, #AD17AD 100%)'
          bgClip='text'
          fontSize='2xl'
          lineHeight='32px'
          textDecoration='none'
          transition='0.25s ease-in-out'
          _hover={{
            bgGradient:
              "linear-gradient(94.89deg, #AD17AD 0%, #D62789 70.2%, #FF5A00 100%)",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          {title}
        </Heading>
      </ChakraLink>
      <Box>
        <Badge paddingX={2} paddingY={1} rounded='md'>
          {category}
        </Badge>
      </Box>
      <AspectRatio maxW='560px' ratio={1} marginY={4} boxShadow='md'>
        <iframe title={title} src={url} allowFullScreen />
      </AspectRatio>
      <Flex
        direction='row'
        alignItems='flex-start'
        justifyContent='space-between'
      >
        <Text
          as='span'
          color='brand.raid'
          fontSize='xl'
          overflowWrap='anywhere'
          marginTop={2}
        >
          {conference}
        </Text>
        <Text
          as='span'
          color='brand.raid'
          fontSize='xl'
          overflowWrap='anywhere'
          marginTop={2}
        >
          {year}
        </Text>
      </Flex>
    </Flex>
  </Flex>
);

export default ResourceCard;
