import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getQuizById, verifyQuiz } from "../../store/quizSlice";
import Loading from "../../components/Loading";
import { Button, Flex, Heading, Radio, Stack, Text } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import DefaultLayout from "../../layouts/DefaultLayout";
import Error from "../Error/Error";

export default function Quiz() {
  const quiz = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setFakeLoading(false), 2000);

    dispatch(getQuizById(id));
  }, [id, dispatch]);

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    const payload = [];

    Object.entries(data).forEach(([questionId, answerId]) => {
      payload.push({ questionId: parseInt(questionId), answerId: answerId });
    });

    dispatch(verifyQuiz({ id: id, payload: payload }));

    navigate("/score/");
  };

  return (
    <>
      {(fakeLoading || quiz?.status === "loading") && <Loading />}
      {!fakeLoading && quiz?.status === "succeeded" && (
        <DefaultLayout>
          <Heading as={"h2"} color="main.500" mb="24px">
            {quiz?.data?.name}
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            {quiz?.data?.questions?.length > 0 &&
              quiz?.data?.questions?.map((q) => {
                const alternatives = Array.from(q?.answers).sort((a, b) =>
                  a.label.localeCompare(b.label)
                );

                return (
                  <Flex direction="column" gap="12px" mb="24px" key={q?.id}>
                    <Text fontSize={18} color="text.700" fontWeight="bold">
                      {q?.label}
                    </Text>

                    <Controller
                      name={`${q?.id}`}
                      control={control}
                      render={({ field }) => (
                        <Stack ml="12px">
                          {alternatives.map((a) => (
                            <Radio
                              {...field}
                              key={a?.id}
                              value={a?.id}
                              isChecked={a?.id === parseInt(field.value)}
                              onChange={(value) => {
                                field.onChange(value);
                              }}
                            >
                              {a?.label}
                            </Radio>
                          ))}
                        </Stack>
                      )}
                    />
                  </Flex>
                );
              })}

            <Button
              type="submit"
              marginY="32px"
              w="full"
              variant="solid"
              bg="main.500"
              color="white"
              _hover={{ bg: "main.400" }}
            >
              Enviar
            </Button>
          </form>
        </DefaultLayout>
      )}
      {!fakeLoading && quiz?.status === "failed" && <Error />}
    </>
  );
}
