import React, { useState } from "react";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu.jsx";
import { ChevronDownIcon, ListFilterIcon, SquarePenIcon } from "lucide-react";
import { useAuth } from "@/hooks/context/userAuth.js";
import { Button } from "@/components/ui/button.jsx";
import useWorkspacePreferencesModal from "@/hooks/context/useWorkspacePreferencesModal.jsx";
import useCreateChannelModal from "@/hooks/context/useCreateChannelModal.js";
import WorkspaceInviteModal from "./WorkspaceInviteModal";

const WorkspacePanelHeader = ({ workspace }) => {
  const { auth } = useAuth();

  const isAdmin = workspace?.members?.find(
    (member) => member?.memberId === auth?.user?._id && member?.role === "admin"
  );

  const { setOpenUpdateWorkspaceModal, setWorkspaceDetails } =
    useWorkspacePreferencesModal();

  const { openCreateChannelModal, setOpenCreateChannelModal } =
    useCreateChannelModal(workspace);

  const [openWorkspaceInviteModal, setOpenWorkspaceInviteModal] = useState();

  const handleUpdateWorkspaceModal = () => {
    setWorkspaceDetails({ ...workspace });
    setOpenUpdateWorkspaceModal(true);
  };

  const handleCreateChannelModel = () => {
    setOpenCreateChannelModal(true);
  };

  return (
    <div>
      <WorkspaceInviteModal
        openWorkspaceInviteModal={openWorkspaceInviteModal}
        setOpenWorkspaceInviteModal={setOpenWorkspaceInviteModal}
        workspaceName={workspace?.name}
        joinCode={workspace?.joinCode}
      ></WorkspaceInviteModal>
      <div className="flex z-auto items-center justify-between px-4 h-[50px] gap-0.5 w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="font-semibold text-lg w-auto p-1.5 overflow-hidden flex gap-2 items-center justify-center">
              <span className="capitalize">{workspace?.name}</span>
              <ChevronDownIcon className="size-5 ml-1" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            portalled={false} // Add this
            side="bottom"
            align="start"
            className="w-64"
          >
            <DropdownMenuItem>
              <div className="size-9 relative overflow-hidden text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2 bg-[#616061]">
                {workspace?.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold capitalize text-black">
                  {workspace?.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  Active Workspace
                </p>
              </div>
            </DropdownMenuItem>
            {isAdmin && (
              <>
                <DropdownMenuItem
                  className={"cursor-pointer py-2"}
                  onClick={handleUpdateWorkspaceModal}
                >
                  Preferenes
                </DropdownMenuItem>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                <DropdownMenuItem
                  className={"cursor-pointer py-2"}
                  onClick={() => setOpenWorkspaceInviteModal(true)}
                >
                  Invite people to {workspace?.name} workspace
                </DropdownMenuItem>

                <DropdownMenuSeparator></DropdownMenuSeparator>

                <DropdownMenuItem
                  className={"cursor-pointer py-2"}
                  onClick={handleCreateChannelModel}
                >
                  Create Channel
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex gap-1 items-center ">
          <Button
            variant="transparent"
            size="iconSm"
            className={"hover:bg-accent-foreground p-2"}
          >
            <ListFilterIcon className="size-5"></ListFilterIcon>
          </Button>

          <Button
            variant="transparent"
            size="iconSm"
            className={"hover:bg-accent-foreground p-2 "}
          >
            <SquarePenIcon className="size-5"></SquarePenIcon>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePanelHeader;
