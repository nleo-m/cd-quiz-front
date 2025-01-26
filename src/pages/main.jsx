import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizzes } from "../store/quizzesSlice";
import Loading from "../components/Loading";
import QuizCard from "../components/QuizCard";
import { Flex } from "@chakra-ui/react";

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
        <Flex gap="12px">
          {quizzes.data.map((q) => (
            <QuizCard quiz={q} />
          ))}
        </Flex>
      )}
    </>
  );
}
