import React, { useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card } from "../../components/ui/card";
import { FaRegMessage } from "react-icons/fa6";
import { FaArrowAltCircleDown, FaCircle } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import {
  FcAcceptDatabase,
  FcApproval,
  FcAssistant,
  FcBinoculars,
  FcGallery,
} from "react-icons/fc";
import { IoSearchSharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { Copy } from "lucide-react"
 
import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"


const iconComponents = {
  FcGallery,
  FcApproval,
  FcAcceptDatabase,
  FcAssistant,
  FcBinoculars,
  IoSearchSharp,
  FiPlus,
  FaArrowAltCircleDown,
  FaCircle,
  AiFillCaretDown,
};

const itemType = "CARD";

const CardItem = ({ card, index, moveCard }) => {
  const [, ref] = useDrag({
    type: itemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: itemType,
    hover(item) {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  });

  const IconComponent = iconComponents[card.iconName]; // Get the icon component dynamically

  return (
    <div
      ref={(node) => ref(drop(node))}
      className={` mb-3 mr-4 ${getCardColor(card.status)}`}
    >
      <Card>
        <div
          className={`h-1 w-5 mt-2 ml-2 ${getColorClass(card.status)}`}
        ></div>
        <div className="ml-2 font-semibold text-[14px]">{card.title}</div>
        <div className="mt-5 mb-2 mr-3 flex justify-end">
          <div className="mr-5 flex items-center gap-1 text-[14px] text-gray-400">
            <FaRegMessage />
            <p>2</p>
          </div>
          <div className="mt-2">{IconComponent && <IconComponent />}</div>
        </div>
      </Card>
    </div>
  );
};

const getColorClass = (status) => {
  switch (status) {
    case "Open":
      return "bg-blue-500 text-blue-500";
    case "Working":
      return "bg-yellow-500 text-yellow-500";
    case "Completed":
      return "bg-green-500 text-green-500";
    case "Overdue":
      return "bg-red-500 text-red-500";
    default:
      return "bg-gray-500 text-gray-500";
  }
};

const getCardColor = (status) => {
  switch (status) {
    case "Open":
      return "border-blue-500  ";
    case "Working":
      return "border-yellow-500 ";
    case "Completed":
      return "border-green-500";
    case "Overdue":
      return "border-red-500";
    default:
      return "border-gray-500";
  }
};

const Column = ({ title, status, cards, moveCard }) => {
  const [, drop] = useDrop({
    accept: itemType,
    drop: (item) => {
      moveCard(item.index, status);
    },
  });

  return (
    <div ref={drop} className="mr-3 border-r-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center ml-4 p-2 gap-1">
          <FaCircle
            className={`text-${
              getColorClass(status).split("-")[1]
            }-500 w-3 h-2`}
          />
          <h1 className="text-[14px] font-bold text-gray-500">{title}</h1>
        </div>
        <div className="bg-gray-200 flex items-center p-1 mr-6 rounded">
          <div className="text-[12px]">
            <AiFillCaretDown />
          </div>
        </div>
      </div>
      {cards.map((card, index) => (
        <CardItem key={card.id} card={card} index={index} moveCard={moveCard} />
      ))}
      <div className="flex items-center ml-6 text-[14px] font-medium text-gray-400 gap-2 mt-4 mb-2">
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"><FiPlus />Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            
          <Input type="Name" placeholder="Name" />
          </div>
          <Button>Add</Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
    </div>
  );
};

const Reports = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      status: "Open",
      title: "Website V1.0 Deployment",
      iconName: "FcGallery",
    },
    {
      id: 2,
      status: "Open",
      title: "Website V1.0 Testing",
      iconName: "FcGallery",
    },
    {
      id: 2,
      status: "Open",
      title: "Website V1.0 Testing",
      iconName: "FcGallery",
    },
    {
      id: 3,
      status: "Working",
      title: "Website V1.0 Marketing",
      iconName: "FcAcceptDatabase",
    },
    {
      id: 4,
      status: "Completed",
      title: "Post Release Campaign",
      iconName: "FcApproval",
    },
    {
      id: 5,
      status: "Overdue",
      title: "Website V1.0 Deployment ",
      iconName: "FcBinoculars",
    },
  ]);

  const moveCard = (fromIndex, toStatus) => {
    const updatedCards = cards.map((card, index) => {
      if (index === fromIndex) {
        let newIconName;
        switch (toStatus) {
          case "Open":
            newIconName = "FcGallery";
            break;
          case "Working":
            newIconName = "FcAcceptDatabase";
            break;
          case "Completed":
            newIconName = "FcAssistant";
            break;
          case "Overdue":
            newIconName = "FcBinoculars";
            break;
          default:
            newIconName = card.iconName; // Keep the current icon if status doesn't match
        }
        return { ...card, status: toStatus, iconName: newIconName };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const columns = [
    { title: "Open", status: "Open" },
    { title: "Working", status: "Working" },
    { title: "Completed", status: "Completed" },
    { title: "Overdue", status: "Overdue" },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mr-12 border-r-2 h-full">
        {/* <div className="grid grid-cols-5 p-2 bg-gray-100">
          <div className="relative flex items-center text-[12px] ml-3 w-[160px] max-w-sm mx-auto">
            <input
              type="email"
              placeholder="ID"
              className="border border-gray-300 rounded-md pl-3 pr-10 py-1 w-full outline-none focus:ring-2 focus:ring-blue-500"
            />
            <IoSearchSharp
              className="absolute right-3 text-gray-500"
              size={20}
            />
          </div>
          <div className="flex items-center text-[12px] -ml-[64px] w-[160px] max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Subject"
              className="border border-gray-300 rounded-md pl-3 pr-10 py-1 w-full outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center text-[12px] -ml-[140px] w-[170px] max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Alpha Service - Q2/"
              className="border border-gray-300 rounded-md pl-3 pr-10 py-1 w-full outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center text-[12px] -ml-[206px] w-[170px] max-w-sm mx-auto">
            <input
              type="email"
              placeholder=""
              className="border border-gray-300 rounded-md pl-3 pr-10 py-1 w-full outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center text-[12px] -ml-[270px] w-[170px] max-w-sm mx-auto">
            <input
              type="email"
              placeholder=""
              className="border border-gray-300 rounded-md pl-3 pr-10 py-1 w-full outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div> */}
        <div className="flex justify-between border-t-2 p-1.5">
          <div className="flex items-center justify-center text-[12px] ml-3 font-medium text-gray-400 bg-gray-100 h-6 w-16 rounded">
            Add Filter
          </div>
          <div className="flex items-center -mr-3 gap-3">
            <h1 className="text-[12px] font-bold text-gray-300">
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
          {columns.map((column) => (
            <Column
              key={column.status}
              title={column.title}
              status={column.status}
              cards={cards.filter((card) => card.status === column.status)}
              moveCard={(fromIndex) => moveCard(fromIndex, column.status)}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Reports;
