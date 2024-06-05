import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

const CardEditModal = ({ open, onClose, card, updateCard }) => {
  const [title, setTitle] = useState(card.title);
  const [timestamp] = useState(card.timestamp); // Avoid updating timestamp
  
  const handleSave = () => {
    updateCard(card.id, title, timestamp);
    onClose();
    console.log("s")
  };
  
  const handleClose = () => {
    onClose(); // Close the modal when the "Close" button is clicked
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Card</DialogTitle>
          <DialogDescription>Edit the details of the card.</DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Timestamp"
            value={timestamp}
            disabled
          />
        </div>
        <DialogFooter className="sm:justify-start">
          <Button onClick={handleSave} variant="primary">
            Save
          </Button>
          <DialogClose asChild>
            <Button onClick={handleClose} variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CardEditModal;
