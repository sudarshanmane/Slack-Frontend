import { Button } from "@/components/ui/button.jsx";
import { cn } from "@/lib/utils.js";
import { cva } from "class-variance-authority";
import React from "react";
import { Link, useParams } from "react-router-dom";

const dCss =
  "flex items-center justify-start gap-1.5 font-normal h-7  text-sm overflow-hidden w-[calc(100%-10%)]";

const sideBarItemVariants = {
  default: "text-[#f9edffcc]",
  active: "text-[#481350] bg-white/90 hover:bg-white/80",
};

const SidebarItem = ({ label, Icon, id, variant }) => {
  const { workspaceId } = useParams();

  return (
    <Button
      variant="transparent"
      size="sm"
      className={
        dCss + " " + sideBarItemVariants[variant || sideBarItemVariants.default]
      }
    >
      <Link
        to={`/workspaces/${workspaceId}/channels/${id}`}
        className="flex items-center justify-center"
      >
        <Icon className="size-3.5 mr-1 "></Icon>
        <span className="text-sm">{label}</span>
      </Link>
    </Button>
  );
};

export default SidebarItem;
