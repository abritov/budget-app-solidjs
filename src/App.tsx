import { Component, createMemo } from "solid-js";
import { createTheme, ThemeProvider } from "@suid/material";
import CssBaseline from "@suid/material/CssBaseline";
import { Route, Routes } from "@solidjs/router";

import Budget from "./Budget";
import Signin from "./Signin";

const App: Component = () => {
  const theme = createMemo(() => createTheme());
  const loggedIn = false;

  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Routes>
        <Route path="/budget" component={Budget} />
        <Route path="/" component={Signin} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
