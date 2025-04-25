import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { Input } from "@/components/ui/input.jsx";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModel.jsx";
import React, { useState } from "react";
import { useCreateWorkspace } from "./../../../hooks/workspace/useCreateWorkspace";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const CreateWorkspaceModel = () => {
  const [workspaceDetails, setWorkspaceDetails] = useState({
    name: "",
    description: "",
  });

  const navigate = useNavigate();

  const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } =
    useCreateWorkspaceModal();

  const handleClose = () => {
    setOpenCreateWorkspaceModal(false);
  };

  const { isPending, createWorspaceMutation } = useCreateWorkspace();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const data = await createWorspaceMutation(workspaceDetails);
      if (data) {
        toast("Workspace Created Successfully");
        navigate("/workspaces");
      }
    } catch (error) {
      console.log("Not able to create a workspace", error);
    } finally {
      setOpenCreateWorkspaceModal(false);
      setWorkspaceDetails({ name: "", description: "" });
    }
  };

  return (
    <Dialog open={openCreateWorkspaceModal} onOpenChange={handleClose}>
      <DialogContent className={"top-52"}>
        <DialogHeader>
          <DialogTitle>Create a new worksapce</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmitForm} className="flex flex-col gap-3">
          <Input
            required
            minLength={3}
            placeholder="Workspace Name"
            onInput={(e) => {
              setWorkspaceDetails({
                ...workspaceDetails,
                name: e.target.value,
              });
            }}
          ></Input>
          <Input
            placeholder="Workspace Description"
            onInput={(e) => {
              setWorkspaceDetails({
                ...workspaceDetails,
                description: e.target.value,
              });
            }}
          ></Input>
          <Button className="w-fit ml-auto" disabled={isPending} type="submit">
            Continue
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkspaceModel;
