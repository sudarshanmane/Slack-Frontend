import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.jsx";
import { useAuth } from "@/hooks/context/userAuth.js";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOutIcon, PencilIcon, Settings2Icon } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useCreateWorkspaceModal } from "./../../../hooks/context/useCreateWorkspaceModel";

const UserButton = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();

    toast("Successfully signed out!", {
      varient: "desctructive",
    });

    navigate("/auth/signin");
  }

  const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

  const handleCreateWorkspaceModal = () => {
    setOpenCreateWorkspaceModal(true);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-10 hover:opacity-65 transition">
          <AvatarImage src={auth?.user?.avatar} />
          <AvatarFallback className={"font-semibold border"}>
            {auth?.user?.username?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem>
          <Settings2Icon></Settings2Icon> Setting
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCreateWorkspaceModal}>
          <PencilIcon></PencilIcon> Create Workspace
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLogout()}>
          <LogOutIcon></LogOutIcon> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
