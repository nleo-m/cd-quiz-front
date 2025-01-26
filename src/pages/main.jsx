import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizzes } from "../store/quizzesSlice";
import Loading from "../components/Loading";
import QuizCard from "../components/QuizCard";
import { Center, Flex, Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        <Flex
          direction="column"
          bg="gray.100"
          justify="space-between"
          h="100vh"
        >
          <Navbar />
          <Flex direction="column">
            <Flex w="full" direction="column" justify="center" align="center">
              <Heading as={"h2"} mb="1em">
                Mais populares 🚀
              </Heading>
              <Center gap="12px">
                {quizzes.data.map((q) => (
                  <QuizCard quiz={q} />
                ))}
              </Center>
            </Flex>
          </Flex>
          <Footer />
        </Flex>
      )}
    </>
  );
}
