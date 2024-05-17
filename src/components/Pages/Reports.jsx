import * as React from "react";

import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { FaArrowAltCircleDown, FaCircle } from "react-icons/fa";
import {} from "../../components/ui/card";
import { Input } from "../ui/input";
import { AiFillCaretDown } from "react-icons/ai";
import { FcBusinessman, FcGallery } from "react-icons/fc";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
const Reports = () => {
  return (
    <div className=" mr-12 border-r-2 h-full">
      <div className=" grid grid-cols-5   p-2 bg-gray-100 ">
        <div className="relative flex items-center text-[12px] ml-3 w-[160px] max-w-sm mx-auto">
          <input
            type="email"
            placeholder="ID"
            className="border border-gray-300 rounded-md pl-3 pr-10 py-1 w-full outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IoSearchSharp className="absolute right-3 text-gray-500" size={20} />
        </div>
        <div className=" flex items-center text-[12px] -ml-10  w-[160px] max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Subject"
            className="border border-gray-300 rounded-md pl-3 pr-10 py-1 w-full outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className=" flex items-center text-[12px] -ml-24  w-[170px] max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Alpha Service - Q2/"
            className="border border-gray-300 rounded-md pl-3 pr-10 py-1 w-full outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className=" flex items-center text-[12px] -ml-36  w-[170px] max-w-sm mx-auto">
          <input
            type="email"
            placeholder=""
            className="border border-gray-300 rounded-md pl-3 pr-10 py-1 w-full outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className=" flex items-center text-[12px] -ml-48 w-[170px] max-w-sm mx-auto">
          <input
            type="email"
            placeholder=""
            className="border border-gray-300 rounded-md pl-3 pr-10 py-1 w-full outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-between border-t-2 p-1.5">
        <div className="flex items-center justify-center text-[12px] ml-3 font-medium text-gray-400   bg-gray-100 h-6 w-16 rounded">
          Add Filter
        </div>
        <div className="flex items-center -mr-5 gap-3">
          <h1 className="text-[12px] font-bold text-gray-300 ">
            Last Modified On
          </h1>
          <div className="bg-gray-200 flex items-center p-1 mr-6 rounded">
            <div className="flex items-center space-x-2">
              <span className="text-black">
                <FaArrowAltCircleDown className="text-black" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 bg-gray-100 border-y border-black">
        <div className=" mr-4 border-r-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center ml-4 p-2 gap-1">
              <FaCircle className="text-blue-500 w-3 h-2" />
              <h1 className="text-[14px] font-bold text-gray-500">Open</h1>
            </div>
            <div className="bg-gray-200 flex items-center p-1 mr-6 rounded">
              <div className="text-[12px] ">
                <AiFillCaretDown />
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-green-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Website V1.0 Deployment & Coures
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <FcGallery />
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-red-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Website V1.0 Testing
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <div className="mr-5 flex items-center gap-1 text-[14px] text-gray-400">
                  <FaRegMessage />
                  <p>2</p>
                </div>
                <div className="mt-2">
                  <FcBusinessman />
                </div>
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-red-100 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Post relize Campaigin
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <FcGallery />
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-red-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Website V1.0 Deployment
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <div className="mr-5 flex items-center gap-1 text-[14px] text-gray-400">
                  <FaRegMessage />
                  <p>2</p>
                </div>
                <div className="mt-2">
                  <FcBusinessman />
                </div>
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-sky-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Website V1.0 Deployment & Coures
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <FcGallery />
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-green-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">Website V1.0</div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <FcGallery />
              </div>
            </Card>
          </div>
          <div className="flex items-center ml-6 text-[14px] font-medium text-gray-400 gap-2 mt-4 mb-2">
            <div>
              <FiPlus />
            </div>
            <div>Add Task</div>
          </div>
        </div>
        <div className=" mr-4 border-r-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center ml-4 p-2 gap-1">
              <FaCircle className="text-yellow-500 w-3 h-2" />
              <h1 className="text-[14px] font-bold text-gray-500">Working</h1>
            </div>
            <div className="bg-gray-200 flex items-center p-1 mr-6 rounded">
              <div className="text-[12px] ">
                <AiFillCaretDown />
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-green-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Website V1.0 Deployment & Coures
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <FcGallery />
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-red-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Website V1.0 Testing
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <div className="mr-5 flex items-center gap-1 text-[14px] text-gray-400">
                  <FaRegMessage />
                  <p>2</p>
                </div>
                <div className="mt-2">
                  <FcBusinessman />
                </div>
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-red-100 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Post relize Campaigin
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <FcGallery />
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-red-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Website V1.0 Deployment
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <div className="mr-5 flex items-center gap-1 text-[14px] text-gray-400">
                  <FaRegMessage />
                  <p>2</p>
                </div>
                <div className="mt-2">
                  <FcBusinessman />
                </div>
              </div>
            </Card>
          </div>
         
          <div className="flex items-center ml-6 text-[14px] font-medium text-gray-400 gap-2 mt-4 mb-2">
            <div>
              <FiPlus />
            </div>
            <div>Add Task</div>
          </div>
        </div>
        <div className=" mr-4 border-r-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center ml-4 p-2 gap-1">
              <FaCircle className="text-green-500 w-3 h-2" />
              <h1 className="text-[14px] font-bold text-gray-500">Completed</h1>
            </div>
            <div className="bg-gray-200 flex items-center p-1 mr-6 rounded">
              <div className="text-[12px] ">
                <AiFillCaretDown />
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-green-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Website V1.0 Deployment & Coures
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <FcGallery />
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-red-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Website V1.0 Testing
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <div className="mr-5 flex items-center gap-1 text-[14px] text-gray-400">
                  <FaRegMessage />
                  <p>2</p>
                </div>
                <div className="mt-2">
                  <FcBusinessman />
                </div>
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-red-100 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Post relize Campaigin
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <FcGallery />
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-red-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Website V1.0 Deployment
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <div className="mr-5 flex items-center gap-1 text-[14px] text-gray-400">
                  <FaRegMessage />
                  <p>2</p>
                </div>
                <div className="mt-2">
                  <FcBusinessman />
                </div>
              </div>
            </Card>
          </div>
        
          <div className="flex items-center ml-6 text-[14px] font-medium text-gray-400 gap-2 mt-4 mb-2">
            <div>
              <FiPlus />
            </div>
            <div>Add Task</div>
          </div>
        </div>
        <div className=" mr-4 border-r-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center ml-4 p-2 gap-1">
              <FaCircle className="text-red-500 w-3 h-2" />
              <h1 className="text-[14px] font-bold text-gray-500">Overdue</h1>
            </div>
            <div className="bg-gray-200 flex items-center p-1 mr-6 rounded">
              <div className="text-[12px] ">
                <AiFillCaretDown />
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <Card className="w-[230px] ">
              <div className="bg-green-500 h-1 w-5 mt-2 ml-2"></div>
              <div className="ml-2 font-semibold text-[14px]">
                Website V1.0 Deployment & Coures
              </div>
              <div className="mt-5 mb-2 mr-3 flex justify-end">
                <FcGallery />
              </div>
            </Card>
          </div>        
          <div className="flex items-center ml-6 text-[14px] font-medium text-gray-400 gap-2 mt-4 mb-2">
            <div>
              <FiPlus />
            </div>
            <div>Add Task</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Reports;

// Similarly, create AboutPage.js, ServicesPage.js, and ContactPage.js
