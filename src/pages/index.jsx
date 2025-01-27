import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizzes } from "../store/quizzesSlice";
import Loading from "../components/Loading";
import QuizCard from "../components/QuizCard";
import { Center, Heading, Link } from "@chakra-ui/react";
import DefaultLayout from "../layouts/DefaultLayout";
import Error from "./Error/Error";

export default function Main() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes);
  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setFakeLoading(false), 1000);
    dispatch(getQuizzes());
  }, []);

  return (
    <>
      {(fakeLoading || quizzes?.status === "loading") && <Loading />}
      {!fakeLoading && quizzes?.status === "succeeded" && (
        <DefaultLayout>
          <Heading as={"h2"}>Mais populares 🚀</Heading>
          <Center gap="24px" minH="480px">
            {quizzes.data.map((q) => (
              <Link href={q?.id}>
                <QuizCard quiz={q} />
              </Link>
            ))}
          </Center>
        </DefaultLayout>
      )}
      {!fakeLoading && quizzes?.status === "failed" && <Error />}
    </>
  );
}
