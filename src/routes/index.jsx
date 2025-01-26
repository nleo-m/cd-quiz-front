import Main from "../pages/main";

const routes = [
  {
    path: "/",
    // errorElement: <Error />,
    children: [{ path: "/", element: <Main /> }],
  },
];

export default routes;
