import React from "react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { AiFillCaretDown } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";


const Sidebar = () => {
  return (
    <div className="w-64 bg-white text-black border-x border-black  flex flex-col  h-full">
      <nav className="flex-grow p-4 ml-12" aria-label="Main Navigation">
        <ul>
          <li className="">
            <NavLink to="/" className="">
              <Accordion collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <h1 className="text-[14px] font-semibold">Reports</h1>
                      <AiFillCaretDown className="ml-2 text-[10px] mt-1" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-[14px] font-semibold mb-2">List</p>
                    <p className="text-[14px] font-semibold mb-2">Gant</p>
                    <p className="text-[14px] font-semibold ">Tree</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/calendar"
              className="hover:text-gray-400 flex items-center"
            >
              <h1 className="text-[14px] font-semibold">Calender</h1>
              <AiFillCaretDown className="ml-2 text-[10px] mt-1" />
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/calendar"
              className="hover:text-gray-400 flex items-center"
            >
              <h1 className="text-[14px] font-semibold">Kanban</h1>
              <AiFillCaretDown className="ml-2 text-[10px] mt-1" />
            </NavLink>
          </li>
          <div className="mt-3">
            <h1 className="text-[12px] font-medium text-gray-300">FILTER BY</h1>
            <li className="mb-2">
              <NavLink
                to="/calendar"
                className="hover:text-gray-400 flex items-center"
              >
                <h1 className="text-[14px] font-semibold">Assigned To</h1>
                <AiFillCaretDown className="ml-2 text-[10px] mt-1" />
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/calendar"
                className="hover:text-gray-400 flex items-center"
              >
                <h1 className="text-[14px] font-semibold">Created By</h1>
                <AiFillCaretDown className="ml-2 text-[10px] mt-1" />
              </NavLink>
            </li>
            <div className="flex items-center ml-6 text-[12px] font-medium text-gray-300">
              <div className="-ml-6">Add Task</div>
              <div>
                <FiPlus />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[12px] font-medium text-gray-300 mt-4 mb-2">
              Tags
            </h1>
            <li className="mb-2">
              <NavLink
                to="/calendar"
                className="hover:text-gray-400 flex items-center"
              >
                <h1 className="text-[14px] font-semibold">Calender</h1>
                <AiFillCaretDown className="ml-2 text-[10px] mt-1" />
              </NavLink>
            </li>
            <h1 className="text-[12px] font-medium text-gray-300">Show Tags</h1>
          </div>
          <div>
            <h1 className="text-[12px] font-medium text-gray-300 mt-4 mb-2">
              SAVE FILTER
            </h1>
            <div className=" flex items-center text-[12px]   w-[170px] max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Filter Name"
                className="border border-gray-300 rounded-md pl-3 pr-10 py-1 w-full outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
