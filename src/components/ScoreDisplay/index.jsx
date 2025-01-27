import { Flex, Text } from "@chakra-ui/react";
import CircularProgressBar from "../CircularProgressBar";
import { useEffect, useState } from "react";

export default function ScoreDisplay({
  score = 0,
  correctAnswers = 0,
  total = 0,
  dummy = false,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (score) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < score) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, []);

  const getMessage = () => {
    if (score < 30)
      return "Olha pelo lado bom, você sempre pode refazer o teste! 😉";

    if (score > 30 && score < 100)
      return "Você está no caminho certo, jovem padawan! 😌";

    return "Perfeito, já pode ser chamado de Jedi! 🚀";
  };

  return (
    <Flex
      direction="column"
      gap="24px"
      align="center"
      justify="center"
      bg="white"
      padding="64px"
      borderRadius="12px"
      textAlign="center"
    >
      <CircularProgressBar percentage={progress} />
      <Text fontSize={{ base: 22, md: 24 }} color="text.400" mt="32px">
        {dummy ? "Volte aqui depois de responder algum quiz :)" : getMessage()}
      </Text>
      <Text fontSize={{ base: 20, md: 24 }} color="text.400">
        Você acertou {correctAnswers}/{total}
      </Text>
    </Flex>
  );
}
