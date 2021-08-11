import { Box, Flex, Heading, Text, Tag, Badge } from "@chakra-ui/react";

interface Resource {
  title: string;
  conference: string;
}

const ResourceCard = ({ title, conference }: Resource) => (
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
      justifyContent='center'
      marginTop='2'
      minHeight={{ base: "0", md: "100px" }}
    >
      <Heading
        as='h2'
        bgGradient='linear-gradient(94.89deg, #FF5A00 0%, #D62789 70.2%, #AD17AD 100%)'
        bgClip='text'
        lineHeight='32px'
      >
        {title}
      </Heading>
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
