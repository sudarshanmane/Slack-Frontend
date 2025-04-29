import { Button } from "@/components/ui/button.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { Input } from "@/components/ui/input.jsx";
import { useCreateChannel } from "@/hooks/channel/useCreateChannel.js";
import useCreateChannelModal from "@/hooks/context/useCreateChannelModal.js";
import { useAuth } from "@/hooks/context/userAuth.js";
import { useUpdateWorkspace } from "@/hooks/workspace/useUpdateWorkpace.js";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const CreateChannelModal = () => {
  const { openCreateChannelModal, setOpenCreateChannelModal } =
    useCreateChannelModal();

  const [channel, setChannel] = useState({ name: "" });

  const handleClose = () => {
    setOpenCreateChannelModal(false);
  };

  const { isSuccess, isPending, createChannelMutation } = useCreateChannel();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    await createChannelMutation(channel);
  };

  useEffect(() => {
    if (isSuccess && !isPending) {
      toast("Channel Created Successfully!");
    }
  }, [isSuccess, isPending]);

  return (
    <Dialog open={openCreateChannelModal} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a Workspace Channel</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmitForm} className="flex gap-3 flex-col">
          <Input
            name="name"
            required
            placeholder="Channel Ex. My Channel..."
            onChange={(e) => setChannel({ ...channel, name: e.target.value })}
          ></Input>

          <div className="flex justify-end">
            <Button type="submit" variant="" className="flex w-fit ml-end">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateChannelModal;
