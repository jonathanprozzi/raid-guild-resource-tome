import { Flex, Heading, Text } from "@chakra-ui/react";

interface HeaderProps {
  title: string;
  children?: React.ReactChild;
}

const Header = ({ title = "Resource Tome", children }: HeaderProps) => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      marginY={{ base: "4", md: "6" }}
    >
      <Heading
        bgGradient='linear-gradient(94.89deg, #FF5A00 0%, #D62789 70.2%, #AD17AD 100%)'
        bgClip='text'
      >
        {title}
      </Heading>
      <Text marginX={{ base: 4, md: 0 }} marginY={{ base: 4, md: 2 }}>
        Welcome adventurer! This tome contains our collection of web3 conference
        talk resources.
      </Text>
    </Flex>
  );
};

export default Header;
