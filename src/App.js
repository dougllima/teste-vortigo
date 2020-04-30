import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Page from "./Components/Page";
import { UserProvider } from "./Contexts/UserContext";
import { TypeProvider } from "./Contexts/TypeContext";
import { PokemonProvider } from "./Contexts/PokemonContext";

let theme = createMuiTheme({
  breakpoints: {
    values: {
      sm: 414,
      md: 828,
      lg: 1242,
    },
  },
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
          <PokemonProvider>
            <Page />
          </PokemonProvider>
        </TypeProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
