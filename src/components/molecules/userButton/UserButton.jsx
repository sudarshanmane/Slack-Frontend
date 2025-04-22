"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.jsx";
import { useAuth } from "@/hooks/context/userAuth.js";
import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, Settings2Icon } from "lucide-react";

const UserButton = () => {
  const { auth } = useAuth();

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
        <DropdownMenuItem>
          <LogOutIcon></LogOutIcon> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
