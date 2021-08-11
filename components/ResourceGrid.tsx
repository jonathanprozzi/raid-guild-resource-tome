import { SimpleGrid, Center } from "@chakra-ui/react";

const ResourceGrid = () => (
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 3 }}
    spacing={{ base: "4", md: "12", lg: "20" }}
    margin={12}
    alignItems='center'
    justifyItems='center'
    fontSize='2xl'
  >
    <Center width='300px' height='300px' background='gray.100'></Center>
    <Center width='300px' height='300px' background='gray.100'></Center>
    <Center width='300px' height='300px' background='gray.100'></Center>
    <Center width='300px' height='300px' background='gray.100'></Center>
  </SimpleGrid>
);

export default ResourceGrid;
