import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Page from "./Components/Page";
import { UserProvider } from "./Contexts/UserContext";
import { TypeProvider } from "./Contexts/TypeContext";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f11e76",
    },
    secondary: {
      main: "#1b1a14",
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <TypeProvider>
          <Page />
        </TypeProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
