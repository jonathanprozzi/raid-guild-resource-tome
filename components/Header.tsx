import { Flex, Heading } from "@chakra-ui/react";

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
      marginY={{ base: "4" }}
    >
      <Heading color='brand.raid'>{title}</Heading>
    </Flex>
  );
};

export default Header;
