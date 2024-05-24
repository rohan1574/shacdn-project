import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Pages/NavBar";
import Sidebar from "../components/Pages/SideBar";

const Layout = () => {
  return (
  
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow ">
            <Outlet />
          </main>
        </div>
      </div>
   
  );
};

export default Layout;
