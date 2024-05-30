import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
import { FaRegMessage } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { Button } from "../../components/ui/button"; // Adjust the import path if necessary
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"; // Adjust the import path if necessary
import { Input } from "../../components/ui/input"; // Adjust the import path if necessary
import { useOutletContext } from "react-router-dom";


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
      className={`mb-3 mr-4 ${getCardColor(card.status)}`}
    >
      <div className="card">
        <div className={`h-1 w-5 mt-2 ml-2 ${getColorClass(card.status)}`}></div>
        <div className="ml-2 font-semibold text-[14px]">{card.title}</div>
        <div className="mt-5 mb-2 mr-3 flex justify-end">
          <div className="mr-5 flex items-center gap-1 text-[14px] text-gray-400">
            <FaRegMessage />
            <p>2</p>
          </div>
          <div className="mt-2">{IconComponent && <IconComponent />}</div>
        </div>
      </div>
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
      return "border-blue-500";
    case "Working":
      return "border-yellow-500";
    case "Completed":
      return "border-green-500";
    case "Overdue":
      return "border-red-500";
    default:
      return "border-gray-500";
  }
};

const Column = ({ title, status, cards, moveCard, addCard }) => {
  const [, drop] = useDrop({
    accept: itemType,
    drop: (item) => {
      moveCard(item.index, status);
    },
  });

  const renderAddTaskDialog = () => {
    if (["Open", "Working", "Completed", "Overdue"].includes(status)) {
      return <AddTaskDialog addCard={addCard} status={status} />;
    } else {
      return null;
    }
  };

  return (
    <div
      ref={drop}
      className={`mr-3 border-r-2 ${status === "Open" || status === "Working" || status === "Completed" || status === "Overdue" ? "max-h-screen overflow-y-auto" : ""}`}
    >
      
      <div className="flex justify-between items-center">
        <div className="flex items-center ml-4 p-2 gap-1">
          <FaCircle className={`text-${getColorClass(status).split("-")[1]}-500 w-3 h-2`} />
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
        {renderAddTaskDialog()}
      </div>
    </div>
  );
};


const AddTaskDialog = ({ addCard, status }) => {
  const [taskName, setTaskName] = useState("");
  const [open, setOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type: itemType,
    item: { type: itemType, text: taskName }, // Include the text in the drag item
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleAdd = () => {
    if (taskName.trim()) {
      addCard(taskName, status);
      setTaskName("");
      setOpen(false);
    }
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Fill in the details to add a new task.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            ref={drag} // Apply drag functionality to the input field
            className={`flex-1 ${isDragging ? 'opacity-50' : ''}`} // Reduce opacity of input field when dragging
          />
          <Button type="submit" onClick={handleAdd}>Add</Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button onClick={handleCloseDialog} type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};



const Reports = () => {
  const { cards, setCards } = useOutletContext();

  const moveCard = (fromIndex, toStatus) => {
    const updatedCards = cards.map((card, index) => {
      if (index === fromIndex) {
        return { ...card, status: toStatus };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const addCard = (title, status) => {
    if (title.trim()) {
      const newCard = {
        id: cards.length + 1,
        status: status,
        title: title,
        iconName: "FcGallery", // Default icon for now
      };
      setCards([...cards, newCard]);
    }
  };

  const columns = [
    { title: "Open", status: "Open" },
    { title: "Working", status: "Working" },
    { title: "Completed", status: "Completed" },
    { title: "Overdue", status: "Overdue" },
  ];

  return (
    <DndProvider backend={HTML5Backend}>

      <div className="mr-12 border-r-2 h-full overflow-x-hidden">
        <div className="flex justify-between border-t-2 p-1.5">
          <div className="flex items-center justify-center text-[12px] ml-3 font-medium text-gray-400 bg-gray-100 h-6 w-16 rounded">
            Add Filter
          </div>
          <div className="flex items-center -mr-3 gap-3">
            <h1 className="text-[12px] font-bold text-gray-300">Last Modified On</h1>
            <div className="bg-gray-200 flex items-center p-1 mr-6 rounded">
              <FaArrowAltCircleDown className="text-black" />
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
              moveCard={moveCard}
              addCard={addCard}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Reports;
