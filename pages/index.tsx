import { Box, Heading, Text, Flex, Alert, Spinner } from "@chakra-ui/react";
import useSWR from "swr";

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
        as='header'
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
    <Box>
      <Text>Let's grab some resources...</Text>
    </Box>
  );
}
