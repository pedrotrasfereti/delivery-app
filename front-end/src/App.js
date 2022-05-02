import React from 'react';

/* Children */
import AppRoutes from './routes';

/* Styles - CSS Reset */
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  /* Reference: https://accessibility.digital.gov */
  '@import': [
    'url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap")',
  ],
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  ul: {
    listStyle: 'none',
  },
  ol: {
    listStyle: 'none',
  },
  a: {
    textDecoration: 'none',
  },
  input: {
    border: '0',
  },
  body: {
    backgroundColor: '$background',
  },
});

function App() {
  globalStyles();

  return <AppRoutes />;
}

export default App;
