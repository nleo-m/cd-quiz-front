import { useSelector } from "react-redux";

import {
  ChakraProvider,
  CircularProgress,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import CircularProgressBar from "../../components/CircularProgressBar";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Score() {
  const quiz = useSelector((state) => state.quiz);

  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setFakeLoading(false), 3000);
  }, []);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < quiz?.score?.percentage) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [quiz]);

  const getMessage = () => {
    if (quiz?.score?.percentage < 30)
      return "Olha pelo lado bom, você sempre pode refazer o teste! 😉";

    if (quiz?.score?.percentage > 30 && quiz?.score?.percentage < 100)
      return "Você está no caminho certo, jovem padawan! 😌";

    return "Perfeito, já pode ser chamado de Jedi! 🚀";
  };

  return (
    <>
      {(fakeLoading || quiz?.status == "loading") && <Loading />}
      {!fakeLoading &&
        quiz?.status == "succeeded" &&
        quiz?.score?.percentage && (
          <DefaultLayout>
            <Flex direction="column" gap="24px">
              <Text fontSize={24} color="text.400">
                {getMessage()}
              </Text>
              <CircularProgressBar percentage={progress} />
              <Text fontSize={24} color="text.400">
                Você acertou {quiz?.score?.correctAnswers}/{quiz?.score?.total}
              </Text>
            </Flex>
          </DefaultLayout>
        )}
    </>
  );
}
