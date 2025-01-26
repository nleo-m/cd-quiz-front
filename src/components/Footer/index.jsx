import { Center, Flex, Image, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Center w="full" h="35px" bg="gray.900">
      <Link href="https://linktr.ee/leonel_m" target="_blank">
        <Text fontSize={14} color="white">
          @Leonel Marcos F J
        </Text>
      </Link>
    </Center>
  );
}
