import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Pages/NavBar";
import Sidebar from "../components/Pages/SideBar";

const Layout = () => {
  const [cards, setCards] = useState([
    // { id: 1, status: "Open", title: "Website V1.0 Deployment", iconName: "FcGallery" },
    // { id: 2, status: "Working", title: "Website V1.0 Marketing", iconName: "FcAcceptDatabase" },
    // { id: 3, status: "Completed", title: "Post Release Campaign", iconName: "FcApproval" },
    // { id: 4, status: "Overdue", title: "Website V1.0 Deployment", iconName: "FcBinoculars" },
  ]);

  const addCard = (title, status) => {
    const newCard = { id: cards.length + 1, status, title, iconName: "FcGallery" };
    setCards([...cards, newCard]);
    console.log("Added new card:", newCard);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar addCard={addCard} />
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
