import { Center, Flex, Image, Link, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Center w="full" h="75px" bg="white">
      <Link href="/" h="50%">
        <Flex h="100%" align="center">
          <Image src="/codi_logo.png" h="100%" />
          <Text>./codi_quiz</Text>
        </Flex>
      </Link>
    </Center>
  );
}
