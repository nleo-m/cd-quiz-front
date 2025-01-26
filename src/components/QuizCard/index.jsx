import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function QuizCard({ quiz }) {
  return (
    <Card maxW="sm">
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
          <Heading size="md">{quiz?.name}</Heading>
          <Text>{quiz?.description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justify="end">
        <Button variant="solid" colorScheme="blue">
          Responder agora
        </Button>
      </CardFooter>
    </Card>
  );
}
