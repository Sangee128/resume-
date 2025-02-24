import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider

const theme = createTheme(); // Create a Material UI theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}> {/* Wrap your app with ThemeProvider */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);