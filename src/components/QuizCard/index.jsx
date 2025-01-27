import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function QuizCard({ quiz }) {
  return (
    <Card
      maxW="sm"
      minW="260px"
      transition=".25s ease"
      cursor="pointer"
      border="none"
      borderColor="main.600 !important"
      _hover={{
        transform: "scale(1.025)",
        borderTop: "2px solid",
        borderBottom: "2px solid",
        boxShadow: "0 10px 24px 8px #00000050",
      }}
    >
      <CardBody>
        <Box
          position="relative"
          bg="gray.200"
          h="220px"
          w="100%"
          mb="16px"
          borderRadius="lg"
        >
          <Image
            src={quiz?.cover_url || ""}
            h="100%"
            w="100%"
            borderRadius="lg"
            objectFit="cover"
          />
        </Box>
        <Stack mt="6" spacing="3">
          <Heading size="md" color="text.700" fontSize={{ base: 18, md: 20 }}>
            {quiz?.name}
          </Heading>
          <Text overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
            {quiz?.description}
          </Text>
        </Stack>
      </CardBody>

      <Center>
        <Divider maxW="50%" />
      </Center>

      <CardFooter justify="end">
        <Link href={quiz?.id}>
          <Button
            variant="solid"
            bg="main.500"
            color="white"
            _hover={{ bg: "main.400" }}
          >
            Responder
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
