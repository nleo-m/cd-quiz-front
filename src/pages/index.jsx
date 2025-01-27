import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizzes } from "../store/quizzesSlice";
import Loading from "../components/Loading";
import QuizCard from "../components/QuizCard";
import { Center, Flex, Heading } from "@chakra-ui/react";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Main() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes);
  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setFakeLoading(false), 2000);
    dispatch(getQuizzes());
  }, []);

  return (
    <>
      {(fakeLoading || quizzes?.status == "loading") && <Loading />}
      {!fakeLoading && quizzes?.status == "succeeded" && (
        <DefaultLayout>
          <Heading as={"h2"}>Mais populares 🚀</Heading>
          <Center gap="24px" minH="480px">
            {quizzes.data.map((q) => (
              <QuizCard quiz={q} />
            ))}
          </Center>
        </DefaultLayout>
      )}
    </>
  );
}
