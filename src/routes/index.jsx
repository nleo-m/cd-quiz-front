import ErrorBoundary from "../pages/Error/ErrorBoundary";
import Main from "../pages/main";
import Quiz from "../pages/Quiz";
import Score from "../pages/Score";

const routes = [
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/:id", element: <Quiz /> },
      { path: "/score", element: <Score /> },
    ],
  },
];

export default routes;
