import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalContextProvider from './context-manager/GlobalContextProvider';
import ResumeContextProvider from './context-manager/ResumeContextProvider';
import App from './App';
import "./index.css";

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResumeContextProvider>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </ResumeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);



