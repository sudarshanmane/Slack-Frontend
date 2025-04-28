import SidebarButton from "@/components/molecules/SidebarButton/SidebarButton.jsx";
import UserButton from "@/components/molecules/userButton/UserButton.jsx";
import {
  BellIcon,
  HomeIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import WorkspaceSwitcher from "./WorkspaceSwitcher.jsx";

const WorkspaceSidebar = () => {
  return (
    <aside className="w-[70px] bg-sky-800 flex flex-col pt-3">
      <WorkspaceSwitcher></WorkspaceSwitcher>
      <SidebarButton Icon={HomeIcon} label="Home"></SidebarButton>
      <SidebarButton Icon={MessageSquareIcon} label="DMs"></SidebarButton>
      <SidebarButton Icon={BellIcon} label="Notifications"></SidebarButton>
      <SidebarButton Icon={MoreHorizontalIcon} label="More"></SidebarButton>
      <div className="flex flex-col justify-center items-center mt-auto mb-4">
        <UserButton></UserButton>
      </div>
    </aside>
  );
};

export default WorkspaceSidebar;
