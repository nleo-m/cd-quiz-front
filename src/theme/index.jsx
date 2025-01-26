import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    main: {
      100: "#DBCBFA",
      300: "#cc99ff",
      500: "#AF55DD",
      700: "#442e66",
    },
    text: {
      400: "#58566B",
      700: "#323242",
    },
  },
  fonts: {
    body: `"Roboto Mono", monospace, sans-serif`,
    heading: `"Roboto Mono", monospace, sans-serif`,
  },

  styles: {
    //
  },
});

export default theme;
