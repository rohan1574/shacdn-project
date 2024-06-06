import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FaArrowAltCircleDown, FaCircle } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { Button } from "../../components/ui/button"; 
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"; 
import { Input } from "../../components/ui/input"; 
import { useOutletContext } from "react-router-dom";
import CardEditModal from './CardEditModal';

const itemType = "CARD";

const CardItem = ({ card, index, moveCard, updateCardStatus, updateCard }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, ref] = useDrag({
    type: itemType,
    item: { index, id: card.id, status: card.status },
  });

  const [, drop] = useDrop({
    accept: itemType,
    hover(item) {
      if (item.id !== card.id) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
    drop(item) {
      if (item.id !== card.id && item.status !== card.status) {
        updateCardStatus(item.id, card.status);
      }
    },
  });


  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      ref={(node) => ref(drop(node))}
      className={`mb-3 ml-2 mr-2 ${getCardColor(card.status)}`}
      onClick={handleCardClick}
    >
      <div className="card">
        <div className={`h-1 w-5 mt-2 ml-2 ${getColorClass(card.status)}`}></div>
        <div className="ml-2 font-semibold text-[14px]">{card.title}</div>       
        <div className="mt-5 mb-2 mr-3 flex justify-end">
        <div className="ml-2 text-[12px] text-gray-500">{card.timestamp}</div>
        </div>
      </div>
      {isModalOpen && (
        <CardEditModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          card={card}
          updateCard={updateCard}
        />
      )}
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

const Column = ({ title, status, cards, moveCard, addCard, updateCardStatus, updateCard }) => {
  const [isOver, setIsOver] = useState(false);

  const [{ isOverCurrent }, drop] = useDrop({
    accept: itemType,
    drop: (item) => {
      setIsOver(false);
      if (item.status !== status) {
        updateCardStatus(item.id, status);
      }
    },
    hover: () => {
      setIsOver(true);
    },
    collect: (monitor) => ({
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });

  const renderAddTaskDialog = () => {
    if (["Open", "Working", "Completed", "Overdue"].includes(status)) {
      return <AddTaskDialog addCard={addCard} status={status} />;
    } else {
      return null;
    }
  };

  const columnClasses = `border-r-2 ${["Open", "Working", "Completed", "Overdue"].includes(status) ? "max-h-screen overflow-y-auto" : ""} ${isOverCurrent ? "bg-gray-200" : ""}`;

  return (
    <div className={columnClasses}>
      <div ref={drop}>
        <div className="flex justify-between items-center">
          <div className="flex items-center ml-4 p-2 gap-1">
            <FaCircle className={`text-${getColorClass(status).split("-")[1]}-500 w-3 h-2`} />
            <h1 className="text-[14px] font-bold text-gray-500">{title}</h1>
          </div>
          <div className="bg-gray-200 flex items-center p-1 mr-6 rounded">
            <AiFillCaretDown className="text-[12px]" />
          </div>
        </div>
        <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
          {cards.map((card, index) => (
            <CardItem key={card.id} card={card} index={index} moveCard={moveCard} updateCardStatus={updateCardStatus} updateCard={updateCard} />
          ))}
        </div>
        <div className="flex items-center ml-6 text-[14px] font-medium text-gray-400 gap-2 mt-4 mb-2">
          {renderAddTaskDialog()}
        </div>
      </div>
    </div>
  );
};


const AddTaskDialog = ({ addCard, status }) => {
  const [taskName, setTaskName] = useState("");
  const [open, setOpen] = useState(false);

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

  const moveCard = (fromIndex, toIndex) => {
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(fromIndex, 1);
    updatedCards.splice(toIndex, 0, movedCard);
    setCards(updatedCards);
  };

  const updateCardStatus = (cardId, newStatus) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, status: newStatus };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const updateCard = (cardId, newTitle, newTimestamp) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, title: newTitle, timestamp: newTimestamp };
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
        iconName: "FcGallery",
        timestamp: new Date().toLocaleString(),
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
        <div className="bg-gray-100 p-2">
          <div className="grid grid-cols-5 gap-2 w-[1000px] ml-2">
            <Input type="email" placeholder="ID" />
            <Input type="email" placeholder="Subject" />
            <Input type="email" placeholder="Alpha Service Q/2" />
            <Input type="email" placeholder="" />
            <Input type="email" placeholder="" />
          </div>
        </div>
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
              updateCardStatus={updateCardStatus}
              updateCard={updateCard}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Reports;