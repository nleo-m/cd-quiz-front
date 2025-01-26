import ErrorBoundary from "../pages/Error/ErrorBoundary";
import Main from "../pages/main";
import Quiz from "../pages/Quiz";

const routes = [
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/:id", element: <Quiz /> },
      { path: "/score", element: <div>Teste score</div> },
    ],
  },
];

export default routes;
