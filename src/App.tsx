import { Component, createMemo } from 'solid-js';
import { createTheme, ThemeProvider } from '@suid/material';
import { Link, Route, Routes } from '@solidjs/router';

import Profile from './Profile';
import Signin from './Signin';

const App: Component = () => {
  const theme = createMemo(() => createTheme());
  const loggedIn = false;

  return (
    <ThemeProvider theme={theme()}>
      <Link href='/profile'>Profile page</Link>
      <Link href='/signin'>Signin page</Link>
      <Routes>
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={Signin} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
