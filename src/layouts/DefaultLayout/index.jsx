import { Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DefaultLayout({ children }) {
  return (
    <Flex direction="column" bg="gray.100" justify="space-between" h="100vh">
      <Navbar />

      <Flex
        w="full"
        direction="column"
        justify="center"
        align="center"
        gap="32px"
        padding={{ base: "0.75em", md: "1em" }}
        mt="100px"
      >
        {children}
      </Flex>

      <Footer />
    </Flex>
  );
}
