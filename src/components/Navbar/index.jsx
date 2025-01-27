import { Flex, Image, Link, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      position="fixed"
      w="full"
      h="75px"
      bg="white"
      zIndex={99}
      align="center"
      paddingX="10%"
    >
      <Link href="/" h="50%">
        <Flex h="100%" align="center">
          <Image src="/codi_logo.png" h="100%" />
          <Text>./codi_quiz</Text>
        </Flex>
      </Link>
    </Flex>
  );
}
