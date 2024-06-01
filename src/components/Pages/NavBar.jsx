import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const Navbar = ({ addCard }) => {
  const [taskName, setTaskName] = useState("");
  const [open, setOpen] = useState(false);

  const handleAddCard = () => {
    if (taskName.trim()) { // Check if taskName has non-empty text
      addCard(taskName.trim(), "Open");
      setTaskName("");
      setOpen(false); // Close the dialog after adding the task
    } else {
      // Handle error: Task name cannot be empty rony is greate is boy my name is jihana rion milon queen rifat
    }
  };

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleCloseDialog = () => {
    setOpen(false); // Close the dialog when the "Close" button is clicked
  };

  return (
    <div className="text-black p-3 flex flex-wrap justify-between items-center border-y border-black">
      <div className="text-lg font-semibold flex-grow">
        <h1 className="ml-2 md:ml-12 text-[18px] md:text-[24px] font-bold">Task Quick View</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2 sm:mt-0">
        <div className="ml-1">
          <button className="flex items-center px-4 py-2 bg-gray-200 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            <h1 className="text-[12px] md:text-[14px] font-semibold">Menu</h1>
            <AiFillCaretDown className="ml-2 text-[10px] mt-1" />
          </button>
        </div>
        <div>
          <button className="flex items-center ml-1.5 px-4 py-2 bg-gray-200 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            <h1 className="text-[12px] md:text-[14px] font-semibold">Refresh</h1>
          </button>
        </div>
        <div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button
                className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                <h1 className="text-[12px] md:text-[14px] font-semibold">New</h1>
              </button>
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
                  onChange={handleInputChange}
                  className="flex-1"
                  autoFocus
                />
                <Button type="submit" onClick={handleAddCard}>Add</Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary" onClick={handleCloseDialog}>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
