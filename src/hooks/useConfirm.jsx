import { Button } from "@/components/ui/button.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { useState } from "react";

export const useConfirm = ({ title, message }) => {
  const [promise, setPromise] = useState(null);

  const confirmation = async () => {
    return new Promise((resolve) => {
      setPromise({ resolve });
    });
  };

  const handleClose = () => {
    if (promise) {
      promise.resolve(false);
    }

    setPromise(null);
  };

  const handleConfirmation = () => {
    promise?.resolve(true);
    setPromise(null);
  };

  const ConfirmDialog = () => {
    return (
      <Dialog open={!!promise}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{message}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmation}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  return {
    ConfirmDialog,
    confirmation,
  };
};
