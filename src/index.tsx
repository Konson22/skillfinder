import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import "./fonts/line-awesome-1.3.0/css/line-awesome.css";
import App from './App';
import "./index.css";
import ExpertsContextProvider from './context-manager/FreelancersContextProvider';
import CompaniesContextProvider from './context-manager/CompaniesContextProvider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ExpertsContextProvider>
        <CompaniesContextProvider>
          <App />
        </CompaniesContextProvider>
      </ExpertsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);



