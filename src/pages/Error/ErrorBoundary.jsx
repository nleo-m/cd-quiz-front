import { useRouteError } from "react-router";
import { useEffect, useState } from "react";

import Error from "./Error";

export default function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);
  let statusCode = error?.status;

  if (error?.name === "AxiosError") statusCode = error?.response?.status;

  console.log(error);
  const [errorMessage, setErrorMessage] = useState(
    "Ocorreu alguma coisa de errado :C"
  );

  const [redirectTo, setRedirectTo] = useState("/");

  useEffect(() => {
    if (statusCode)
      switch (statusCode) {
        case 404:
          setErrorMessage("Está perdido?");
          break;
        case 500:
          setErrorMessage(
            "Parece que o erro foi do nosso lado, fica tranquilo e tente novamente mais tarde!"
          );
          break;
        default:
          break;
      }
  }, []);

  return (
    <Error
      statusCode={statusCode}
      message={errorMessage}
      redirectTo={redirectTo}
    />
  );
}
