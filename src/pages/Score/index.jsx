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
import { useNavigate } from "react-router";
import ScoreDisplay from "../../components/ScoreDisplay";

export default function Score() {
  const quiz = useSelector((state) => state.quiz);
  const navigate = useNavigate();

  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setFakeLoading(false), 3000);
  }, []);

  return (
    <>
      {(fakeLoading || quiz?.status == "loading") && <Loading />}
      {!fakeLoading && !quiz?.status != "loading" && (
        <DefaultLayout>
          <ScoreDisplay
            score={quiz?.score?.percentage}
            total={quiz?.score?.total}
            correctAnswers={quiz?.score?.correctAnswers}
            dummy={quiz?.status === "idle" || !quiz?.score?.percentage}
          />
        </DefaultLayout>
      )}

      {!fakeLoading && quiz?.status == "failed" && <Error />}
    </>
  );
}
