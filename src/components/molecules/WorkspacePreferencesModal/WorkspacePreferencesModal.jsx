import { Button } from "@/components/ui/button.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import useWorkspacePreferencesModal from "@/hooks/context/useWorkspacePreferencesModal.jsx";
import { useDeleteWorkspace } from "@/hooks/workspace/useDeleteWokspace.js";
import { useUpdateWorkspace } from "@/hooks/workspace/useUpdateWorkpace.js";
import { Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useConfirm } from "@/hooks/useConfirm.jsx";

const WorkspacePreferencesModal = () => {
  const {
    openUpdateWorkspaceModal,
    setOpenUpdateWorkspaceModal,
    workspaceDetails,
  } = useWorkspacePreferencesModal();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const [updatedWorkspaceDetails, setUpdatedWorkspaceDetails] = useState({
    ...workspaceDetails,
  });

  const { confirmation, ConfirmDialog } = useConfirm({
    title: "Do you want to delete the workspace!",
    message: "This action can not be deleted!",
  });

  const {
    confirmation: updateConfirmation,
    ConfirmDialog: UpdatConfirmDialog,
  } = useConfirm({
    title: "Do you want to update the workspace!",
    message: "This action can not be deleted!",
  });

  const handleClose = () => {
    setOpenUpdateWorkspaceModal(false);
  };

  const { updateWorspaceMutation, isSuccess, isPending, error } =
    useUpdateWorkspace(workspaceDetails?._id);

  const handleUpdateForm = async (e) => {
    e.preventDefault();

    const isConfirmed = await updateConfirmation();

    if (!isConfirmed) {
      return setOpenUpdateWorkspaceModal(false);
    }

    queryClient.invalidateQueries({ queryKey: ["fetchWorkspaces"] });
    await updateWorspaceMutation(updatedWorkspaceDetails);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Workpsace Details updated successfully!");
      setOpenUpdateWorkspaceModal(false);
    } else if (error) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess]);

  const { deleteWorkspaceMutation, isSuccess: deleteIsSuccess } =
    useDeleteWorkspace(workspaceDetails?._id);

  const handleDeleteWorkspace = async () => {
    try {
      const isConfirmed = await confirmation();

      if (!isConfirmed) {
        setOpenUpdateWorkspaceModal(false);
        return;
      }

      const data = await deleteWorkspaceMutation();
      queryClient.invalidateQueries({ queryKey: ["fetchWorkspaces"] });

      setOpenUpdateWorkspaceModal(false);
      toast(data?.message);
      navigate("/home");
    } catch (error) {
      toast(error?.message);
    }
  };

  return (
    <div>
      <ConfirmDialog />
      <UpdatConfirmDialog />
      <Dialog open={openUpdateWorkspaceModal} onOpenChange={handleClose}>
        <DialogContent className={"top-52"}>
          <DialogHeader>
            <DialogTitle>Update worksapce Details</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpdateForm} className="flex flex-col gap-3">
            <Input
              required
              minLength={3}
              placeholder="Workspace Name"
              onInput={(e) => {
                setUpdatedWorkspaceDetails({
                  ...updatedWorkspaceDetails,
                  name: e.target.value,
                });
              }}
              defaultValue={workspaceDetails?.name}
            ></Input>
            {console.log("workspaceDetails,", workspaceDetails)}
            <Input
              placeholder="Workspace Description"
              onInput={(e) => {
                setUpdatedWorkspaceDetails({
                  ...updatedWorkspaceDetails,
                  description: e.target.value,
                });
              }}
              defaultValue={workspaceDetails?.description}
            ></Input>
            <Button
              className="w-fit ml-auto"
              disabled={isPending}
              type="submit"
            >
              Update
            </Button>
          </form>
          <Separator></Separator>
          <Button
            variant
            className="flex gap-1 text-bold items-center border w-fit"
            onClick={handleDeleteWorkspace}
          >
            <Trash2Icon className="size-5 text-red"></Trash2Icon>
            Delete Workspace
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkspacePreferencesModal;
