import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot instead of ReactDOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';
import Layout from './Root/Layout';
import Error from './Root/Error';
import DashBoard from './components/Pages/DashBoard';
import Calendar from './components/Pages/Calendar';
import About from './components/Pages/About';
import Reports from './components/Pages/Reports';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Reports />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </DndProvider>
    </Router>
  </React.StrictMode>
);
