import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Page from "./Components/Page";
import { UserProvider } from "./Contexts/UserContext";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f11e76",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Page />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
