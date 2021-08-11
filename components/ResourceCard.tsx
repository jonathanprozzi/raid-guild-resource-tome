import {
  Box,
  Flex,
  Heading,
  Text,
  Tag,
  Badge,
  Link as ChakraLink,
} from "@chakra-ui/react";

interface Resource {
  title: string;
  url: string;
  conference: string;
}

const ResourceCard = ({ title, url, conference }: Resource) => (
  <Flex
    padding={6}
    direction='column'
    alignItems='center'
    justifyContent='flex-start'
    borderRadius='lg'
    background='gray.900'
    minWidth={{ base: "80vw", md: "20vw" }}
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
      <Text
        as='span'
        color='brand.raid'
        fontSize='xl'
        overflowWrap='anywhere'
        marginTop={2}
      ></Text>
    </Flex>
  </Flex>
);

export default ResourceCard;
