// src/index.js or src/App.js
import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Reports from "./components/Pages/Reports"; // Adjust the path as necessary

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <Reports />
  </DndProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
