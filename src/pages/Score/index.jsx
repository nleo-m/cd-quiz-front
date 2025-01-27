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
import Error from "../Error/Error";

export default function Score() {
  const quiz = useSelector((state) => state.quiz);

  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setFakeLoading(false), 3000);
  }, []);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (quiz?.score?.percentage && !fakeLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < quiz?.score?.percentage) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [quiz, fakeLoading]);

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
      {!fakeLoading && quiz?.status == "succeeded" && (
        <DefaultLayout>
          <Flex direction="column" gap="24px">
            <Text fontSize={24} color="text.400">
              {getMessage()}
            </Text>
            <CircularProgressBar percentage={progress} />
            <Text fontSize={24} color="text.400">
              Você acertou {quiz?.score?.correctAnswers || 0}/
              {quiz?.score?.total || 0}
            </Text>
          </Flex>
        </DefaultLayout>
      )}

      {!fakeLoading && quiz?.status == "failed" && <Error />}
    </>
  );
}
