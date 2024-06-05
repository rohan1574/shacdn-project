import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Pages/NavBar";
import Sidebar from "../components/Pages/SideBar";

const iconComponents = [
  "FcGallery",
  "FcApproval",
  "FcAcceptDatabase",
  "FcAssistant",
  "FcBinoculars",
];

const Layout = () => {
  const [cards, setCards] = useState([
    // Uncomment for initial card data example
    // { id: 1, status: "Open", title: "Website V1.0 Deployment", iconName: "FcGallery", timestamp: new Date().toLocaleString() },
    // { id: 2, status: "Working", title: "Website V1.0 Marketing", iconName: "FcAcceptDatabase", timestamp: new Date().toLocaleString() },
    // { id: 3, status: "Completed", title: "Post Release Campaign", iconName: "FcApproval", timestamp: new Date().toLocaleString() },
    // { id: 4, status: "Overdue", title: "Website V1.0 Deployment", iconName: "FcBinoculars", timestamp: new Date().toLocaleString() },
  ]);

  const addCard = (title, status) => {
   
    const newCard = {
      id: cards.length + 1,
      status,
      title,
      timestamp: new Date().toLocaleString(),
    };
    setCards([...cards, newCard]);
    console.log("Added new card:", newCard);
  };
  const refreshCards = () => {
    // Implement logic to refresh cards
    setCards([]);
    // Example logic: setCards([...cards]); to trigger re-render
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar addCard={addCard} refreshCards={refreshCards}/>
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow">
          <Outlet context={{ cards, setCards }} />
        </main>
      </div>
    </div>
  );
};

export default Layout;
