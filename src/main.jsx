import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './Root/Layout';
import Error from './Root/Error';
import DashBoard from './components/Pages/DashBoard';
import Calendar from './components/Pages/Calendar';
import About from './components/Pages/About';
import Home from './components/Pages/Reports';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <DashBoard />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
