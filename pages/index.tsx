import { Box, Text, Flex, Alert, Spinner } from "@chakra-ui/react";
import useSWR from "swr";
import ResourceGrid from "../components/ResourceGrid";

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "no-cors",
    credentials: "same-origin",
  });
  if (!res.ok) {
    throw Error("There is problem with reading the tome's pages.");
  }
  const data = await res.json();

  return data;
};

export default function Home() {
  const { data, error } = useSWR(`/api/getResources`, fetcher, {});
  if (error) {
    return (
      <Flex
        direction='column'
        justify='center'
        align='center'
        minHeight='100vh'
      >
        <Alert status='error'>Problem reading the tome.{error.message}</Alert>
      </Flex>
    );
  }

  if (!data) {
    return (
      <Flex
        direction='column'
        justify='center'
        align='center'
        minHeight='100vh'
      >
        <Flex direction='column' align='center' justify='center'>
          <Alert status='info'>The resource tome is empty.</Alert>
          <Spinner
            size='xl'
            thickness='2px'
            emptyColor='red.100'
            color='red.300'
            margin={4}
          />
        </Flex>
      </Flex>
    );
  }

  if (data.length === 0) {
    return (
      <Flex
        direction='column'
        justify='center'
        align='center'
        minHeight='100vh'
      >
        <Flex
          direction='column'
          align='center'
          justify='center'
          marginX={{ base: "8" }}
          color='brand.raid'
        >
          <Text fontSize='lg'>No resources have been added to the tome.</Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <Box as='section'>
      <Text>Let's grab some resources...</Text>
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        marginX={{ base: "20vw", md: "auto" }}
        paddingX={{ base: "6", md: "10" }}
        paddingTop={{ base: "0", md: "10" }}
        paddingBottom={20}
      >
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          maxW={{ base: "xl", md: "7xl" }}
          mx='auto'
          px={{ base: "6", md: "8" }}
        >
          <ResourceGrid />
        </Flex>
      </Box>
    </Box>
  );
}
