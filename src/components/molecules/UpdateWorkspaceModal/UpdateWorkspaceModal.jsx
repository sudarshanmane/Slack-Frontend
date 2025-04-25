import { Dialog, DialogContent } from "@/components/ui/dialog.jsx";
import useUpdateWorkspaceModal from "@/hooks/context/useUpdateWorkspaceModal.jsx";
import React from "react";

const UpdateWorkspaceModal = ({ workspaceDetails }) => {
  const { openUpdateWorkspaceModal, setOpenUpdateWorkspaceModal } =
    useUpdateWorkspaceModal();

  const [updatedWorkspaceDetails, setUpddateWorkspaceDetails] = useState();

  const handleClose = () => {
    setOpenUpdateWorkspaceModal(false);
  };

  const handleSubmitForm = async () => {};

  return (
    <div>
      <Dialog open={openUpdateWorkspaceModal} onOpenChange={handleClose}>
        <DialogContent className={"top-52"}>
          <DialogHeader>
            <DialogTitle>Update worksapce Details</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmitForm} className="flex flex-col gap-3">
            <Input
              required
              minLength={3}
              placeholder="Workspace Name"
              onInput={(e) => {
                setUpddateWorkspaceDetails({
                  ...updatedWorkspaceDetails,
                  name: e.target.value,
                });
              }}
            ></Input>
            <Input
              placeholder="Workspace Description"
              onInput={(e) => {
                setUpddateWorkspaceDetails({
                  ...updatedWorkspaceDetails,
                  description: e.target.value,
                });
              }}
            ></Input>
            <Button
              className="w-fit ml-auto"
              disabled={isPending}
              type="submit"
            >
              Update
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateWorkspaceModal;
