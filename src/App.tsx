import { Component, createMemo } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Paper from '@suid/material/Paper';
import Card from '@suid/material/Card';
import Typography from '@suid/material/Typography';
import { createTheme, ThemeProvider } from '@suid/material';

const App: Component = () => {
  const theme = createMemo(() => createTheme());

  return (
    <ThemeProvider theme={theme()}>
      <div class={styles.App}>
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
            <Paper>
              <Card>
                <Typography>Test</Typography>
              </Card>
            </Paper>
          </p>
          <a
            class={styles.link}
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
