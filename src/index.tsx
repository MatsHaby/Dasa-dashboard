import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { iNavItem } from './interfaces/nav'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { navbarItems } from './constants/navbarItems';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let theme = createTheme();
theme = responsiveFontSizes(theme)

const DynamicRoutes = () => {
  return navbarItems.map((navItem: iNavItem) => {
    return (
      <Route
        path={navItem.route}
        key={navItem.id}
        element={navItem.element}
      />
    );
  });
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {DynamicRoutes()}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
