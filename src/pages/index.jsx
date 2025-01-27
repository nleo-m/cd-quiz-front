import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizzes } from "../store/quizzesSlice";
import Loading from "../components/Loading";
import QuizCard from "../components/QuizCard";
import { Flex, Heading } from "@chakra-ui/react";
import DefaultLayout from "../layouts/DefaultLayout";
import Error from "./Error/Error";
import Slider from "react-slick";

export default function Main() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes);
  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setFakeLoading(false), 1000);
    dispatch(getQuizzes());
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerPadding: 0,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "25px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          centerPadding: 0,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {(fakeLoading || quizzes?.status === "loading") && <Loading />}
      {!fakeLoading && quizzes?.status === "succeeded" && (
        <DefaultLayout>

          <Flex direction="column" w="80%">
            <Heading as={"h2"} alignSelf="start">Mais populares 🚀</Heading>
            <Slider className="carousel" {...settings}>
              {quizzes.data.map((q) => (
                <QuizCard quiz={q} />
              ))}
            </Slider>
          </Flex>
        </DefaultLayout>
      )}
      {!fakeLoading && quizzes?.status === "failed" && <Error />}
    </>
  );
}
