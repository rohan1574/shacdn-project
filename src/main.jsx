import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import statements
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';
import Layout from './Root/Layout';
import Error from './Root/Error';
import DashBoard from './components/Pages/DashBoard';
import Calendar from './components/Pages/Calendar';
import About from './components/Pages/About';
import Reports from './components/Pages/Reports';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Wrap the entire application in the Router */}
      <DndProvider backend={HTML5Backend}>
        <Routes> {/* Define your routes */}
          <Route path="/" element={<Layout />}> {/* Main layout for nested routes */}
            <Route index element={<Reports />} /> {/* Home Page */}
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<Error />} /> {/* Error page for undefined routes */}
        </Routes>
      </DndProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
