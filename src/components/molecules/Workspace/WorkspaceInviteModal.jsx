import { Button } from "@/components/ui/button.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { CopyIcon } from "lucide-react";
import React from "react";
import copy from "copy-to-clipboard";
import { toast } from "sonner";

const WorkspaceInviteModal = ({
  openWorkspaceInviteModal,
  setOpenWorkspaceInviteModal,
  workspaceName,
  joinCode,
}) => {
  const handleCopy = () => {
    const copied = copy(joinCode);
    if (copied) {
      toast("Join Code Copied successfully!");
      setOpenWorkspaceInviteModal(false);
    }
  };

  return (
    <Dialog
      open={openWorkspaceInviteModal}
      onOpenChange={setOpenWorkspaceInviteModal}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Invite People To Join Workpace - {workspaceName}
          </DialogTitle>
          <DialogDescription>
            Use the code shown below to invite people to your workspace!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col py-10 gap-y-4 justify-center items-center border">
          <p className="border p-2 font-bold text-lg">{joinCode}</p>

          <Button
            size="small"
            variant={"ghost"}
            className="p-2"
            onClick={handleCopy}
          >
            Copy Link <CopyIcon></CopyIcon>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkspaceInviteModal;
