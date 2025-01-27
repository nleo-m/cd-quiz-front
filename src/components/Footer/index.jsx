import { Center, Flex, Image, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Center alignSelf="end" w="full" h="35px" bg="gray.900" mt="40px">
      <Link href="https://linktr.ee/leonel_m" target="_blank">
        <Text fontSize={14} color="white">
          @Leonel Marcos F J
        </Text>
      </Link>
    </Center>
  );
}
