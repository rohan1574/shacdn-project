import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';
import Layout from './Root/Layout';
import Error from './Root/Error';
import DashBoard from './components/Pages/DashBoard';
import Calendar from './components/Pages/Calendar';
import About from './components/Pages/About';
import Reports from './components/Pages/Reports'; // Assuming `Home` is renamed to `Reports`

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Reports />,
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
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  </React.StrictMode>
);
