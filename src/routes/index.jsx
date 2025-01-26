import ErrorBoundary from "../pages/Error/ErrorBoundary";
import Main from "../pages/main";

const routes = [
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    children: [{ path: "/", element: <Main /> }],
  },
];

export default routes;
