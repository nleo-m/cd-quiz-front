import { Flex, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      w="full"
      h="35px"
      bg="gray.900"
      mt="40px"
      align="center"
      justify="end"
      paddingX="10%"
    >
      <Link href="https://linktr.ee/leonel_m" target="_blank">
        <Text fontSize={14} color="white">
          @Leonel Marcos F J
        </Text>
      </Link>
    </Flex>
  );
}
