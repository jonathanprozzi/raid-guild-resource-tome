import { Box, Heading, Text, Flex, Alert, Spinner } from "@chakra-ui/react";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "no-cors",
    credentials: "same-origin",
  });
  if (!res.ok) {
    throw Error("There is problem with the data request.");
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
        <Alert status='error'>Failed to load resources: {error.message}</Alert>
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
          <Alert status='info'>Loading event photos!</Alert>
          <Spinner
            size='xl'
            thickness='2px'
            emptyColor='cyan.100'
            color='cyan.300'
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
        <Flex direction='column' align='center' justify='center'>
          <Text fontSize='lg'>No resources have been added to the tome.</Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <Box>
      <Heading>Resource Tome!</Heading>
      <Text>Let's grab some resources...</Text>
    </Box>
  );
}
