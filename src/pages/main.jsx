import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizzes } from "../store/quizzesSlice";

export default function Main() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes);

  useEffect(() => {
    dispatch(getQuizzes());
  }, []);

  useEffect(() => {
    console.log(quizzes);
  }, [quizzes]);

  console.log(process.env.REACT_APP_API_URL);

  return <div>Testando!</div>;
}
